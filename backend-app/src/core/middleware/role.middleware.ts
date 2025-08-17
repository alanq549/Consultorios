// middleware/role.middleware.ts
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./auth.middleware";

export const requireRole = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "No tienes permiso para acceder a esta ruta" });
    }

    next();
  };
};
