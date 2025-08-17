// src/modules/notifications/notifications.routes.ts
import { Router } from "express";
import * as notificationsController from "./notifications.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";

const router = Router();

router.get("/", authenticateToken, notificationsController.getMyNotifications);
router.patch("/:id/read", authenticateToken, notificationsController.readNotification);
router.delete("/:id", authenticateToken, notificationsController.removeNotification);

export default router;
