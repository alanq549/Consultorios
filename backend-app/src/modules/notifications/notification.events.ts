// src/modules/notifications/notification.events.ts
import { createNotification } from "./notifications.service";

/**
 * Centraliza los eventos de notificaciones para todos los roles.
 * Así evitamos lógica repetida en cada service.
 */

export const NotificationEvents = {
  // ----- ADMIN -----
  newProfessionalRegistered: async (adminId: number, professionalName: string) => {
    await createNotification(
      adminId,
      "Nuevo profesional registrado",
      `El usuario ${professionalName} se ha registrado como profesional.`
    );
  },

  // ----- PROFESSIONAL -----
  profileVerified: async (professionalId: number) => {
    await createNotification(
      professionalId,
      "Perfil verificado",
      "Tu perfil ha sido verificado por el administrador."
    );
  },

  appointmentScheduled: async (professionalId: number, clientName: string, date: string, appointmentId: number) => {
    await createNotification(
      professionalId,
      "Nueva cita agendada",
      `Tienes una nueva cita con ${clientName} el ${date}.`,
      appointmentId
    );
  },

  appointmentCompletedForProfessional: async (professionalId: number, clientName: string, appointmentId: number) => {
    await createNotification(
      professionalId,
      "Cita completada",
      `La cita con ${clientName} ha sido marcada como completada.`,
      appointmentId
    );
  },

  // ----- CLIENT -----
  appointmentConfirmed: async (clientId: number, professionalName: string, appointmentId: number) => {
    await createNotification(
      clientId,
      "Cita confirmada",
      `Tu cita con ${professionalName} ha sido confirmada.`,
      appointmentId
    );
  },

  appointmentCompletedForClient: async (clientId: number, professionalName: string, appointmentId: number) => {
    await createNotification(
      clientId,
      "Cita completada",
      `Tu cita con ${professionalName} ha sido completada.`,
      appointmentId
    );
  },

  appointmentCancelled: async (clientId: number, professionalName: string, appointmentId: number) => {
    await createNotification(
      clientId,
      "Cita cancelada",
      `Tu cita con ${professionalName} ha sido cancelada.`,
      appointmentId
    );
  },
    welcomeUser: async (userId: number, userName: string) => {
    await createNotification(
      userId,
      "Bienvenido a Consultorios",
      `Hola ${userName}, gracias por registrarte. ¡Bienvenido a la plataforma!`
    );
  },

};


