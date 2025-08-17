// schedules.validation.ts
import { z } from "zod";

export const createScheduleSchema = z.object({
  dayOfWeek: z.number()
    .int()
    .min(0, "El día debe ser entre 0 (domingo) y 6 (sábado)")
    .max(6, "El día debe ser entre 0 (domingo) y 6 (sábado)"),

  startTime: z.string().regex(
    /^([0-1]\d|2[0-3]):([0-5]\d)$/,
    "Formato inválido de hora de inicio (HH:MM)"
  ),

  endTime: z.string().regex(
    /^([0-1]\d|2[0-3]):([0-5]\d)$/,
    "Formato inválido de hora de fin (HH:MM)"
  ),

  professionalId: z.number()
    .int()
    .positive("El ID del profesional debe ser positivo"),
      isAvailable: z.boolean().optional().default(true), // ✅

}).refine(data => {
  // Comparar startTime < endTime
  const [startHour, startMin] = data.startTime.split(":").map(Number);
  const [endHour, endMin] = data.endTime.split(":").map(Number);
  const start = startHour * 60 + startMin;
  const end = endHour * 60 + endMin;

  return start < end;
}, {
  message: "La hora de inicio debe ser menor que la hora de fin",
  path: ["endTime"],
});

export type CreateScheduleInput = z.infer<typeof createScheduleSchema>;

export const updateScheduleSchema = createScheduleSchema.partial();

export type UpdateScheduleInput = z.infer<typeof updateScheduleSchema>;

//validacion para obtener horarios disponibles
export const getAvailableSchedulesSchema = z.object({
  professionalId: z.number()
    .int()
    .positive("El ID del profesional debe ser positivo")
    .min(1, "El ID del profesional debe ser mayor que 0"),
});

export type GetAvailableSchedulesInput = z.infer<typeof getAvailableSchedulesSchema>;