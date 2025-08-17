import { Response } from "express"; 

import { AuthenticatedRequest } from "../../core/middleware/auth.middleware";
import { getProfessionalProfileByUserId, getProfessionalsBySpecialty, updateProfessionalProfile,getProfessionalStats } from "./professionals.service";
import {updateProfessionalProfileSchema} from "./professionals.validation"

export const getMyProfessionalProfileController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user!.id;
    const profile = await getProfessionalProfileByUserId(userId);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener el perfil" });
  }
};


export const updateMyProfessionalProfileController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user!.id;

    // Extraer avatar file si existe
    const avatarFile = (req.files as any)?.avatar?.[0];
    const avatarPath = avatarFile ? `/uploads/avatars/${avatarFile.filename}` : undefined;

    // Parsear socialLinks y certificados (de string a objeto/array)
    if (typeof req.body.socialLinks === "string") {
      req.body.socialLinks = JSON.parse(req.body.socialLinks);
    }
    if (typeof req.body.certificates === "string") {
      req.body.certificates = JSON.parse(req.body.certificates);
    }

    // Aquí agregamos los nuevos certificados subidos
    const newCertificateFiles = (req.files as any)?.certificates ?? [];
    const newCertificateUrls = newCertificateFiles.map(
      (file: Express.Multer.File) => `/uploads/certificates/${file.filename}`
    );

    // Combinar certificados antiguos y nuevos
    req.body.certificates = [...(req.body.certificates ?? []), ...newCertificateUrls];

    // Validar con zod
    const parsed = updateProfessionalProfileSchema.parse(req.body);

    // Si se subió avatar, lo agregamos
    if (avatarPath) {
      parsed.avatar = avatarPath;
    }

    // Actualizar en DB
    const updated = await updateProfessionalProfile(userId, parsed);

    res.json(updated);
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message || "Error al actualizar perfil" });
  }
};


export const getProfessionalsBySpecialtyController = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const professionals = await getProfessionalsBySpecialty(Number(id));
    res.json(professionals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener profesionales por especialidad" });
  }
};

export const getStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const professionalId = req.user!.id;
    const stats = await getProfessionalStats(professionalId);
    res.json(stats);
  } catch (error) {
    console.error("Error al obtener estadísticas del profesional:", error);
    res.status(500).json({ message: "Error al obtener estadísticas" });
  }
};
