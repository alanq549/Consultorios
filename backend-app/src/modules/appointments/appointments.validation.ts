// modules/appointments/appointments.validation.ts
import { z } from "zod";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

const DEFAULT_TZ = "America/Mexico_City";

export const createAppointmentSchema = z.object({
  serviceId: z.number().int(),
  professionalId: z.number().int(),

  date: z.string()
    .refine((val) => dayjs(val, "YYYY-MM-DD", true).isValid(), { message: "Fecha inválida" }),

  startTime: z.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Hora inválida, usa formato HH:mm" }),

  notes: z.string().optional(),
}).refine((data) => {
  if (!data.date || !data.startTime) return true;

  // Combinar fecha + hora en zona México
  const appointmentDateTime = dayjs.tz(`${data.date} ${data.startTime}`, "YYYY-MM-DD HH:mm", DEFAULT_TZ);

  const nowMX = dayjs().tz(DEFAULT_TZ).subtract(2, "minute"); // tolerancia 2 min

  return appointmentDateTime.isAfter(nowMX);
}, {
  message: "No puedes agendar para una hora pasada",
  path: ["startTime"],
});



export const guestClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
});
export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>;

export const createAppointmentByProfessionalSchema = z.object({
  clientId: z.number().optional(),
  guestClient: guestClientSchema.optional(),
  serviceId: z.number(),
  date: z.string(), // valida que sea fecha ISO o un formato que uses
  startTime: z.string(), // "HH:mm"
  notes: z.string().optional(),
});
export type CreateAppointmentByProfessionalInput = z.infer<typeof createAppointmentByProfessionalSchema>;


export const updateAppointmentSchema = z.object({
  serviceId: z.number().int().optional(),
  professionalId: z.number().int().optional(),

  date: z.string()
    .optional()
    .refine((val) => !val || dayjs(val, "YYYY-MM-DD", true).isValid(), { message: "Fecha inválida" }),

  startTime: z.string()
    .optional()
    .refine((val) => !val || /^([01]\d|2[0-3]):([0-5]\d)$/.test(val), { message: "Hora inválida, usa formato HH:mm" }),

  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]).optional(),

  notes: z.string().optional(),

}).refine((data) => {
  if (!data.date || !data.startTime) return true;

  // Combinar fecha + hora en zona México
  const appointmentDateTime = dayjs.tz(`${data.date} ${data.startTime}`, "YYYY-MM-DD HH:mm", DEFAULT_TZ);

  const nowMX = dayjs().tz(DEFAULT_TZ).subtract(2, "minute"); // tolerancia 2 min

  return appointmentDateTime.isAfter(nowMX);
}, {
  message: "No puedes agendar para una hora pasada",
  path: ["startTime"],
});