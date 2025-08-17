import {  Response } from "express";
import { getUserConfig, updateUserConfig } from "./customConfig.service";
import { updateConfigSchema } from "./customConfig.validation";
import { AuthenticatedRequest } from "../../core/middleware/auth.middleware";

export const getConfig = async (req: AuthenticatedRequest, res: Response) => {
  const config = await getUserConfig(req.user!.id);
  return res.json(config);
};

export const updateConfig = async (req: AuthenticatedRequest, res: Response) => {
  const parsed = updateConfigSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Datos inválidos", errors: parsed.error.flatten() });
  }

  const config = await updateUserConfig(req.user!.id, parsed.data);
  return res.json(config);
};
