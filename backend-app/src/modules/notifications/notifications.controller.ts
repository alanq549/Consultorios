import { Notification } from './../../core/lib/prisma/generated/index.d';
// src/modules/notifications/notifications.controller.ts
import { Response } from "express";
import * as notificationsService from "./notifications.service";
import { AuthenticatedRequest } from "../../core/middleware/auth.middleware";

export const getMyNotifications = async (req: AuthenticatedRequest, res: Response) => {
  const notifications = await notificationsService.getUserNotifications(req.user!.id);
  return res.json(notifications);
};

export const readNotification = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  await notificationsService.markNotificationAsRead(Number(id), req.user!.id);
  return res.json({ message: "Notificación marcada como leída" });
};

export const removeNotification = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  await notificationsService.deleteNotification(Number(id), req.user!.id);
  return res.json({ message: "Notificación eliminada" });
};

