import { Router } from "express";
import {
  getMyAppointmentsClient,
  getMyAppointmentsProfessional,
  getAllAppointmentsController,
  createAppointmentController,
  updateAppointmentController,
} from "./appointments.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";
import { requireRole } from "../../core/middleware/role.middleware";

const router = Router();

router.post(
  "/",
  authenticateToken,
  requireRole("CLIENT"), // solo clientes pueden crear citas
  createAppointmentController
);

router.get("/client/me", authenticateToken, requireRole("CLIENT"), getMyAppointmentsClient);
router.get("/professional/me", authenticateToken, requireRole("PROFESSIONAL"), getMyAppointmentsProfessional);
router.get("/", authenticateToken, requireRole("ADMIN"), getAllAppointmentsController);

router.patch(
  "/:id",
  authenticateToken,
  updateAppointmentController
);

export default router;
