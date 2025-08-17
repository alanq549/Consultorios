// middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";
import { JWT_SECRET } from "../config/env"; // asegúrate de tener esta variable en tu env

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: string;
  };
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Formato: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; role: string };

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    req.user = {
      id: user.id,
      role: user.role
    };

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};
