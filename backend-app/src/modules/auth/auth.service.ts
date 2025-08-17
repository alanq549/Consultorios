import prisma from "../../core/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginInput } from "./auth.types";
import { JWT_SECRET } from "../../core/config/env";
import crypto from "crypto";
import {  sendVerificationEmail } from "../../core/service/emailService";
import { RegisterDTO } from "./auth.validation";
import { NotificationEvents } from "../notifications/notification.events";


export const loginUser = async (data: LoginInput) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error("Credenciales inválidas");

  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) throw new Error("Credenciales inválidas");

  // Generar JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "12h" }
  );

  return { token, user };
};

export const registerUser = async (data: RegisterDTO & {
  avatar?: string;
  professionalProfile?: RegisterDTO["professionalProfile"] & {
    certificates?: string[];
  };
}) => {
  const {
    name,
    lastName,
    phone,
    avatar,
    email,
    password,
    professionalProfile,
    isProfessional,
  } = data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("El correo ya está en uso");

  const hashedPassword = await bcrypt.hash(password, 10);
  const role = isProfessional ? "PROFESSIONAL" : "CLIENT";

  const user = await prisma.user.create({
    data: {
      name,
      lastName,
      phone,
      avatar,
      email,
      password: hashedPassword,
      role,
    },
  });

  let professionalProfileCreated = null;

  if (role === "PROFESSIONAL" && professionalProfile) {
    const {
      specialtyId,
      description,
      certificates,
      socialLinks,
    } = professionalProfile;

    professionalProfileCreated = await prisma.professionalProfile.create({
      data: {
        userId: user.id,
        specialtyId,
        description,
        certificates: certificates ?? [],
        socialLinks: socialLinks ?? undefined,
      },
    });
  }

  await prisma.customConfig.create({
    data: {
      userId: user.id,
      language: "es",
      theme: "light",
      layout: "SIDEBAR",
      notificationsEnabled: true,
      preferences: {},
    },
  });

  const config = await prisma.customConfig.findUnique({
    where: { userId: user.id },
  });

  const code = await createVerificationCode(user.id);
  await sendVerificationEmail(email, code);

  // 📢 Disparo de notificación al ADMIN si es profesional
  if (role === "PROFESSIONAL") {
    // Obtener admin principal (o lista de admins)
    const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
    if (admin) {
      await NotificationEvents.newProfessionalRegistered(admin.id, `${name} ${lastName}`);
      
    }
  }

await NotificationEvents.welcomeUser?.(user.id, name); 

  const { password: _, ...userSafe } = user;

  return {
    user: userSafe,
    professionalProfile: professionalProfileCreated,
    config,
  };
};



export const createVerificationCode = async (userId: number) => {
  const code = crypto.randomUUID(); // o usa Math.floor(Math.random() * 1000000).toString()
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos

  await prisma.verificationAttempt.create({
    data: {
      userId,
      code,
      expiresAt,
    },
  });

  return code;
};

export const verifyUserCode = async (code: string) => {
  const attempt = await prisma.verificationAttempt.findUnique({
    where: { code },
    include: { user: true },
  });

  if (!attempt) throw new Error("Código inválido");
  if (attempt.isUsed) throw new Error("Código ya fue usado");
  if (attempt.expiresAt < new Date()) throw new Error("Código expirado");

  // Marcar código como usado y verificar usuario
  await Promise.all([
    prisma.verificationAttempt.update({
      where: { code },
      data: { isUsed: true },
    }),
    prisma.user.update({
      where: { id: attempt.userId },
      data: { isVerified: true },
    }),
  ]);

  const user = attempt.user;

  let additionalData: any = {};

 if (user.role === "PROFESSIONAL") {
  const profile = await prisma.professionalProfile.findUnique({
    where: { userId: user.id },
    include: { specialty: true },
  });

  additionalData = {
    professionalProfile: profile,
    avatar: user.avatar,
    name: user.name,
    lastName: user.lastName,
    phone: user.phone,
    isVerified: true,
  };
}


  if (user.role === "CLIENT") {
    additionalData = {
      name: user.name,
      lastName: user.lastName,
      avatar: user.avatar,
      phone: user.phone,
      isVerified: true,
    };
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "12h" }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      ...additionalData,
    },
  };
};

export const createPasswordResetToken = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Usuario no encontrado");

  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 15); // 15 min

  await prisma.passwordReset.create({
    data: { userId: user.id, token, expiresAt },
  });

  return { token, user };
};

export const resetPasswordWithToken = async (token: string, newPassword: string) => {
  const entry = await prisma.passwordReset.findUnique({ where: { token }, include: { user: true } });

  if (!entry || entry.isUsed || entry.expiresAt < new Date()) {
    throw new Error("Token inválido o expirado");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await Promise.all([
    prisma.user.update({
      where: { id: entry.userId },
      data: { password: hashedPassword },
    }),
    prisma.passwordReset.update({
      where: { id: entry.id },
      data: { isUsed: true },
    }),
  ]);
};

