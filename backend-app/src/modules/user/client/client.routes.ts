import { Router } from "express";
import { authenticateToken } from "../../../core/middleware/auth.middleware";
import { requireRole } from "../../../core/middleware/role.middleware";
import {
  getMyClientProfileController,
  updateMyClientProfileController,
} from "./client.controller";
import { upload } from "../../../core/middleware/upload.middleware";

const router = Router();

// Middleware de autenticación + validación de rol
router.use(authenticateToken, requireRole("CLIENT"));

// GET - Obtener perfil del cliente
router.get("/me", getMyClientProfileController);

// PUT - Actualizar perfil del cliente (incluye avatar)
router.patch(
  "/me",
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  updateMyClientProfileController
);

export default router;
