// src/modules/users/users.routes.ts
import { Router } from "express";
import { getAdminStatsHandler, getUsersHandler } from "./admin.controller";
import { authenticateToken } from "../../../core/middleware/auth.middleware";
import { requireRole } from "../../../core/middleware/role.middleware";

const router = Router();

router.get("/", authenticateToken, requireRole("ADMIN"), getUsersHandler);
router.get("/stats", authenticateToken, requireRole("ADMIN"), getAdminStatsHandler);

export default router;
