// src/modules/notifications/notifications.service.ts
import prisma from "../../core/lib/prisma";

export const createNotification = async (userId: number, title: string, message: string, appointmentId?: number) => {
  return prisma.notification.create({
    data: {
      userId,
      title,
      message,
      appointmentId
    }
  });
};

export const getUserNotifications = async (userId: number) => {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  });
};

export const markNotificationAsRead = async (id: number, userId: number) => {
  return prisma.notification.updateMany({
    where: { id, userId },
    data: { isRead: true }
  });
};

export const deleteNotification = async (id: number, userId: number) => {
  return prisma.notification.deleteMany({
    where: { id, userId }
  });
};
