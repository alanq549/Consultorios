import { Router } from "express";
import {
  getAvailableSchedulesController,
  createScheduleController,
  updateScheduleController,
  deleteScheduleController,
  getMySchedulesController,
} from "./schedules.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";
import { requireRole } from "../../core/middleware/role.middleware";
const router = Router();


router.get("/available/:professionalId", getAvailableSchedulesController);
router.get("/my", authenticateToken, requireRole("PROFESSIONAL"), getMySchedulesController);
router.post("/", authenticateToken, requireRole("PROFESSIONAL"), createScheduleController);
router.patch("/:id", authenticateToken, requireRole("PROFESSIONAL"), updateScheduleController);
router.delete("/:id", authenticateToken, requireRole("PROFESSIONAL"), deleteScheduleController);

export default router;
