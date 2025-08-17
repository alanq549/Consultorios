import { Response } from "express";
import { AuthenticatedRequest } from "../../../core/middleware/auth.middleware";
import { getClientProfileByUserId, updateClientProfile } from "./client.service";
import { updateClientProfileSchema } from "./client.validations";

export const getMyClientProfileController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user!.id;
    const client = await getClientProfileByUserId(userId);
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perfil del cliente" });
  }
};


export const updateMyClientProfileController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user!.id;

    // Obtener avatar si fue subido
    const avatarFile = (req.files as any)?.avatar?.[0];
    const avatarPath = avatarFile ? `/uploads/avatars/${avatarFile.filename}` : undefined;

    // Parsear y validar body con Zod
    const parsedData = updateClientProfileSchema.parse(req.body);

    // Si hay avatar, lo agregamos al objeto validado
    if (avatarPath) {
      parsedData.avatar = avatarPath;
    }

    const updatedClient = await updateClientProfile(userId, parsedData);

    res.json(updatedClient);
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: error.message || "Error al actualizar perfil" });
  }
};