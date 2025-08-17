import { Request, Response } from "express";
import {
  createPasswordResetToken,
  loginUser,
  registerUser,
  resetPasswordWithToken,
} from "./auth.service";
import { loginSchema } from "./auth.validation";
import prisma from "../../core/lib/prisma";
import { sendTemplateEmail } from "../../core/service/emailService";
import { verifyUserCode as verifyUserCodeService } from "./auth.service";
import { registerSchema, RegisterDTO } from "./auth.validation";
import { z } from "zod";

export const loginHandler = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Datos inválidos", errors: parsed.error.issues });
  }

  try {
    const { token, user } = await loginUser(parsed.data);

    // 🧩 Buscamos la configuración personalizada
    const config = await prisma.customConfig.findUnique({
      where: { userId: user.id },
    });

    let additionalData: any = {
      name: user.name,
      lastName: user.lastName,
      avatar: user.avatar,
      phone: user.phone,
      isVerified: user.isVerified,
      config,
    };

    if (user.role === "PROFESSIONAL") {
      const profile = await prisma.professionalProfile.findUnique({
        where: { userId: user.id },
        include: {
          specialty: true,
        },
      });
      additionalData.professionalProfile = profile;
    }

    if (user.role === "CLIENT") {
      additionalData = {
        name: user.name,
        lastName: user.lastName,
        avatar: user.avatar,
        phone: user.phone,
        isVerified: user.isVerified,
      };
    }

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        ...additionalData,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
};

export const registerUserController = async (req: Request, res: Response) => {


  
  try {
    // ✅ Primero: parsear campos anidados o con tipo string
    if (typeof req.body.professionalProfile === "string") {
      try {
        req.body.professionalProfile = JSON.parse(req.body.professionalProfile);
      } catch (err) {
        return res
          .status(400)
          .json({ message: "El perfil profesional no tiene formato válido" });
      }
    }

    if (typeof req.body.isProfessional === "string") {
      req.body.isProfessional = req.body.isProfessional === "true";
    }

    // ✅ Ahora sí: validar con Zod
    const validatedData: RegisterDTO = registerSchema.parse(req.body);

    // 📂 Procesar archivos
    const avatarFile = (req.files as any)?.avatar?.[0];
    const certificatesFiles = (req.files as any)?.certificates || [];

    const avatarPath = avatarFile
      ? `/uploads/avatars/${avatarFile.filename}`
      : "";

    const certificatesPaths = certificatesFiles.map(
      (file: Express.Multer.File) => `/uploads/certificates/${file.filename}`
    );

    // 🧩 Armar full data
    const fullData: RegisterDTO & {
      avatar?: string;
      certificates?: string[];
    } = {
      ...validatedData,
      avatar: avatarPath,
      professionalProfile: validatedData.professionalProfile
        ? {
            ...validatedData.professionalProfile,
            certificates: certificatesPaths,
          }
        : undefined,
    };


    // 🚀 Registrar
    const result = await registerUser(fullData);

    return res.status(201).json({
      message: "Usuario registrado correctamente",
      ...result,
    });
  } catch (error) {
    console.error("❌ Error en register:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.issues });
    }

    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error al registrar usuario",
    });
  }
};

export const verifyUserHandler = async (req: Request, res: Response) => {
  const { code } = req.query;

  if (typeof code !== "string") {
    return res.status(400).json({ message: "Código no válido" });
  }

  try {
    const result = await verifyUserCodeService(code);
    return res
      .status(200)
      .json({ message: "Cuenta verificada correctamente", ...result });
  } catch (err: any) {
    console.error("Error al verificar código:", err.message);
    return res.status(400).json({ message: err.message });
  }
};

export const forgotPasswordHandler = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const { token, user } = await createPasswordResetToken(email);
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    await sendTemplateEmail({
      to: email,
      subject: "Restablece tu contraseña",
      templateName: "reset-password",
      templateData: { name: user.name, resetUrl },
    });

    return res
      .status(200)
      .json({ message: "Correo enviado con instrucciones" });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

export const resetPasswordHandler = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  try {
    await resetPasswordWithToken(token, newPassword);
    return res
      .status(200)
      .json({ message: "Contraseña actualizada correctamente" });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};
