// modules/appointments/appointments.service.ts
import prisma from "../../core/lib/prisma";
import { CreateAppointmentInput } from "./appointments.types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import bcrypt from "bcrypt";
import { NotificationEvents } from "../../modules/notifications/notification.events";
import { AppointmentStatus } from "@prisma/client";

dayjs.extend(utc);
dayjs.extend(tz);

// Cambia la zona horaria a la tuya (Ciudad de México)
const DEFAULT_TZ = "America/Mexico_City";

export const getAppointmentsByClient = async (clientId: number) => {
  const appointments = await prisma.appointment.findMany({
    where: { clientId },
    include: { service: true, professional: true },
  });

  return appointments.map((appt) => {
    if (!appt.date || !appt.startTime) {
      console.warn("Cita con fecha o hora inválida:", appt);
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        professional: {
          id: appt.professional?.id ?? null,
          name: appt.professional?.name ?? "N/D",
          lastName: appt.professional?.lastName ?? "",
          avatar: appt.professional?.avatar ?? null,
        },
      };
    }

    const dateObj = new Date(appt.date);
    const [hours, minutes] = appt.startTime.split(":").map(Number);
    dateObj.setHours(hours, minutes, 0, 0);

    const localTime = dayjs(dateObj).tz(DEFAULT_TZ);

    if (!localTime.isValid()) {
      console.warn("Fecha/hora inválida tras parseo:", dateObj);
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        professional: {
          id: appt.professional?.id ?? null,
          name: appt.professional?.name ?? "N/D",
          lastName: appt.professional?.lastName ?? "",
          avatar: appt.professional?.avatar ?? null,
        },
      };
    }

    return {
      id: appt.id,
      dateTimeLocal: localTime.format("YYYY-MM-DD HH:mm"),
      status: appt.status,
      paymentStatus: appt.paymentStatus,
      notes: appt.notes,
      service: {
        id: appt.service.id,
        name: appt.service.name,
        durationMinutes: appt.service.durationMinutes,
        price: appt.service.price,
      },
      professional: {
        id: appt.professional.id,
        name: appt.professional.name,
        lastName: appt.professional.lastName,
        avatar: appt.professional.avatar,
      },
    };
  });
};

export const getAppointmentsByProfessional = async (professionalId: number) => {
  const appointments = await prisma.appointment.findMany({
    where: { professionalId },
    include: { service: true, client: true },
  });

  return appointments.map((appt) => {
    if (!appt.date || !appt.startTime) {
      console.warn("Cita con fecha o hora inválida:", appt);
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        client: {
          id: appt.client?.id ?? null,
          avatar: appt.client?.avatar ?? null,
          name: appt.client?.name ?? "N/D",
          lastName: appt.client?.lastName ?? "",
          // omite email, contraseña, datos sensibles
        },
      };
    }

   const dateStr = appt.date.toISOString().slice(0, 10); // "YYYY-MM-DD"
const timeStr = appt.startTime; // "HH:mm"

const localTime = dayjs.tz(`${dateStr}T${timeStr}:00`, DEFAULT_TZ);

    if (!localTime.isValid()) {
console.warn("Fecha/hora inválida tras parseo:", localTime.toString());
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        client: {
          id: appt.client?.id ?? null,
          avatar: appt.client?.avatar ?? null,
          name: appt.client?.name ?? "N/D",
          lastName: appt.client?.lastName ?? "",
        },
      };
    }

    return {
      id: appt.id,
      dateTimeLocal: localTime.format("YYYY-MM-DD HH:mm"),
      status: appt.status,
      paymentStatus: appt.paymentStatus,
      notes: appt.notes,
      service: {
        id: appt.service.id,
        name: appt.service.name,
        durationMinutes: appt.service.durationMinutes,
        price: appt.service.price,
      },
      client: appt.client
        ? {
            id: appt.client.id,
            avatar: appt.client.avatar,
            name: appt.client.name,
            lastName: appt.client.lastName,
          }
        : {
            id: null,
            name: "N/D",
            lastName: "",
          },
    };
  });
};

export const getAllAppointments = async () => {
  const appointments = await prisma.appointment.findMany({
    include: {
      service: true,
      professional: true,
      client: true,
    },
  });

  return appointments.map((appt) => {
    if (!appt.date || !appt.startTime) {
      console.warn("Cita con fecha o hora inválida:", appt);
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        professional: {
          id: appt.professional?.id ?? null,
          name: appt.professional?.name ?? "N/D",
          lastName: appt.professional?.lastName ?? "",
        },
        client: {
          id: appt.client?.id ?? null,
          name: appt.client?.name ?? "N/D",
          lastName: appt.client?.lastName ?? "",
        },
      };
    }

    const dateObj = new Date(appt.date);
    const [hours, minutes] = appt.startTime.split(":").map(Number);
    dateObj.setHours(hours, minutes, 0, 0);

    const localTime = dayjs(dateObj).tz(DEFAULT_TZ);

    if (!localTime.isValid()) {
      console.warn("Fecha/hora inválida tras parseo:", dateObj);
      return {
        id: appt.id,
        dateTimeLocal: null,
        status: appt.status,
        paymentStatus: appt.paymentStatus,
        notes: appt.notes,
        service: {
          id: appt.service?.id ?? null,
          name: appt.service?.name ?? "N/D",
          durationMinutes: appt.service?.durationMinutes ?? null,
          price: appt.service?.price ?? null,
        },
        professional: {
          id: appt.professional?.id ?? null,
          name: appt.professional?.name ?? "N/D",
          lastName: appt.professional?.lastName ?? "",
        },
        client: {
          id: appt.client?.id ?? null,
          name: appt.client?.name ?? "N/D",
          lastName: appt.client?.lastName ?? "",
        },
      };
    }

    return {
      id: appt.id,
      dateTimeLocal: localTime.format("YYYY-MM-DD HH:mm"),
      status: appt.status,
      paymentStatus: appt.paymentStatus,
      notes: appt.notes,
      service: {
        id: appt.service.id,
        name: appt.service.name,
        durationMinutes: appt.service.durationMinutes,
        price: appt.service.price,
      },
      professional: {
        id: appt.professional.id,
        name: appt.professional.name,
        lastName: appt.professional.lastName,
      },
      client: appt.client
        ? {
            id: appt.client.id,
            name: appt.client.name,
            lastName: appt.client.lastName,
          }
        : {
            id: null,
            name: "N/D",
            lastName: "",
          },
    };
  });
};

export async function validarProfesional(professionalId: number) {
  const user = await prisma.user.findUnique({
    where: { id: professionalId },
    include: { professionalProfile: true },
  });

  if (!user || !user.professionalProfile) {
    throw new Error(
      "El professionalId no corresponde a un profesional válido."
    );
  }
}

export const createAppointment = async (
  data: CreateAppointmentInput,
  clientId: number
) => {
  const { serviceId, professionalId, date, startTime, notes } = data;
  const appointmentDateTime = dayjs.tz(`${date} ${startTime}`, "YYYY-MM-DD HH:mm", DEFAULT_TZ);

  const appointment = await prisma.appointment.create({
    data: {
      clientId,
      serviceId,
      professionalId,
      date: appointmentDateTime.toDate(), // ahora sí toma la zona correcta
      startTime,
      notes,
    },
  });

// Obtener nombre del cliente
const client = await prisma.user.findUnique({
  where: { id: clientId },
  select: { name: true, lastName: true },
});

const clientFullName = client
  ? `${client.name} ${client.lastName ?? ""}`.trim()
  : "Cliente Desconocido";

// Disparar notificación para el profesional
await NotificationEvents.appointmentScheduled(
  professionalId,
  clientFullName,
  date,              // fecha como string
  appointment.id     // ID de la cita
);


  return appointment;
};

export const createGuestClient = async (guestClientData: {
  name: string;
  email: string;
  phone?: string;
}) => {
  const randomPassword = Math.random().toString(36).slice(-8); // cadena random simple
  const hashedPassword = await bcrypt.hash(randomPassword, 10);

  return prisma.user.create({
    data: {
      name: guestClientData.name,
      email: guestClientData.email,
      phone: guestClientData.phone,
      role: "CLIENT",
      password: hashedPassword,
      isVerified: false,
    },
  });
};

export const updateAppointment = async (
  appointmentId: number,
  data: Partial<{
    serviceId: number;
    professionalId: number;
    date: string;
    startTime: string;
    notes: string;
    status: AppointmentStatus;
  }>
) => {
  // 1. Traer el estado y datos actuales
  const oldAppointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
    include: {
      client: { select: { id: true, name: true, lastName: true } },
      professional: { select: { id: true, name: true, lastName: true } }
    }
  });

  if (!oldAppointment) throw new Error("Cita no encontrada");

  // 2. Actualizar la cita
  const updatedAppointment = await prisma.appointment.update({
    where: { id: appointmentId },
    data,
  });

  // 3. Verificar cambios de estado y notificar
  if (data.status && data.status !== oldAppointment.status) {
    switch (data.status) {
      case "CONFIRMED": {
        if (oldAppointment.client && oldAppointment.professional) {
          await NotificationEvents.appointmentConfirmed(
            oldAppointment.client.id,
            `${oldAppointment.professional.name} ${oldAppointment.professional.lastName ?? ""}`.trim(),
            appointmentId
          );
        }
        break;
      }
      case "CANCELLED": {
        if (oldAppointment.client && oldAppointment.professional) {
          // Cliente recibe cancelación
          await NotificationEvents.appointmentCancelled(
            oldAppointment.client.id,
            `${oldAppointment.professional.name} ${oldAppointment.professional.lastName ?? ""}`.trim(),
            appointmentId
          );
          // Profesional recibe cancelación
          await NotificationEvents.appointmentCancelled(
            oldAppointment.professional.id,
            `${oldAppointment.client.name} ${oldAppointment.client.lastName ?? ""}`.trim(),
            appointmentId
          );
        }
        break;
      }
      case "COMPLETED": {
        if (oldAppointment.client && oldAppointment.professional) {
          // Cliente recibe completada
          await NotificationEvents.appointmentCompletedForClient(
            oldAppointment.client.id,
            `${oldAppointment.professional.name} ${oldAppointment.professional.lastName ?? ""}`.trim(),
            appointmentId
          );
          // Profesional recibe completada
          await NotificationEvents.appointmentCompletedForProfessional(
            oldAppointment.professional.id,
            `${oldAppointment.client.name} ${oldAppointment.client.lastName ?? ""}`.trim(),
            appointmentId
          );
        }
        break;
      }
    }
  }

  return updatedAppointment;
};


export const hora = (): string => {
  const ahora = dayjs().tz(DEFAULT_TZ).format("DD/MM/YYYY, h:mm:ss a");
  return `Hola desde appointments.service.ts - Hora actual: ${ahora}`;
};
