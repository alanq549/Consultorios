// En schedules.service.ts
import prisma from "../../core/lib/prisma";
import type { CreateScheduleInput } from "./schedules.validation"; // o la ruta que uses

// Función para calcular el día de la semana desde una fecha
const getDayOfWeek = (date: Date) => date.getDay(); // 0 (domingo) a 6 (sábado)


export const getAvailableSchedules = async (professionalId: number, order: "asc" | "desc" = "asc") => {
  const schedules = await prisma.schedule.findMany({
    where: { professionalId, isAvailable: true },
  });

  const appointments = await prisma.appointment.findMany({
    where: {
      professionalId,
      date: {
        gte: new Date(), // Solo futuras
      },
    },
  });

  // Derivar dayOfWeek para cada cita
  const appointmentsWithDayOfWeek = appointments.map(apt => ({
    ...apt,
    dayOfWeek: getDayOfWeek(new Date(apt.date)),
  }));

  // Filtrar horarios que ya están tomados
  const available = schedules.filter(schedule => {
    return !appointmentsWithDayOfWeek.some(apt => 
      apt.dayOfWeek === schedule.dayOfWeek &&
      apt.startTime === schedule.startTime
    );
  });

  // Ordenar resultados
  const sorted = available.sort((a, b) => {
    // Primero por día
    const dayCompare = order === "asc"
      ? a.dayOfWeek - b.dayOfWeek
      : b.dayOfWeek - a.dayOfWeek;

    if (dayCompare !== 0) return dayCompare;

    // Si el día es igual, ordenar por startTime
    return order === "asc"
      ? a.startTime.localeCompare(b.startTime)
      : b.startTime.localeCompare(a.startTime);
  });

  return sorted;
};

// 💡 NUEVA función para el usuario logueado
export const getAvailableSchedulesByProfessionalId = async (
  professionalId: number,
  order: "asc" | "desc" = "asc"
) => {
  return await getAvailableSchedules(professionalId, order);
};


export const createSchedule = async (data: CreateScheduleInput) => {
  return await prisma.schedule.create({ data });
};

export const updateSchedule = async (
  id: number,
  professionalId: number,
  data: Partial<CreateScheduleInput>
) => {
  // Verificar que le pertenece al profesional
  const existing = await prisma.schedule.findFirst({
    where: { id, professionalId },
  });

  if (!existing) {
    throw new Error("Horario no encontrado o sin permisos");
  }

  return await prisma.schedule.update({
    where: { id },
    data,
  });
};

export const deleteSchedule = async (id: number, professionalId: number) => {
  const existing = await prisma.schedule.findFirst({
    where: { id, professionalId },
  });

  if (!existing) {
    throw new Error(`El horario con ID ${id} no existe`);
  }

  return await prisma.schedule.delete({
    where: { id },
  });
};