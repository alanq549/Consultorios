import { Router } from "express";
import {
  createServiceController,
  deleteServiceController,
  getAllPublicServicesController,
  getMyServicesController,
  getServicesByProfessionalIdController,
  updateServiceController,
  
} from "./services.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";
import { requireRole } from "../../core/middleware/role.middleware";

const router = Router();

router.use(authenticateToken); // todos deben estar autenticados

// Ruta accesible tanto por PROFESSIONAL como CLIENT
router.get("/", requireRole("PROFESSIONAL", "CLIENT"), getAllPublicServicesController);
router.get("/professional/:professionalId",  requireRole("CLIENT", "ADMIN"),  getServicesByProfessionalIdController);

// Solo PROFESSIONAL puede crear, editar y eliminar
router.get("/my", requireRole("PROFESSIONAL"), getMyServicesController);
router.post("/", requireRole("PROFESSIONAL"), createServiceController);
router.put("/:id", requireRole("PROFESSIONAL"), updateServiceController);
router.delete("/:id", requireRole("PROFESSIONAL"), deleteServiceController);

export default router;
