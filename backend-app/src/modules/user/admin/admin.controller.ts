// src/modules/users/users.controller.ts
import { Request, Response } from "express";
import { getAllUsersWithProfiles, getAdminStatsService } from "./admin.service";

export const getUsersHandler = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsersWithProfiles();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

// src/modules/admin/admin.controller.ts

export const getAdminStatsHandler = async (_req: Request, res: Response) => {
  try {
    const stats = await getAdminStatsService();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener estadísticas" });
  }
};
