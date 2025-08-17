// modules/appointments/appointments.validation.ts
import { z } from "zod";

// Convierte "YYYY-MM-DD" a Date en zona local, sin desfasaje UTC
function parseDateLocal(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export const createAppointmentSchema = z.object({
  serviceId: z.number().int(),
  professionalId: z.number().int(),

  date: z.string()
    .refine((val) => !isNaN(Date.parse(val)), { message: "Fecha inválida" })
    .refine((val) => {
      const selected = parseDateLocal(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: "No puedes agendar para días pasados" }),

  startTime: z.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Hora inválida, usa formato HH:mm" }),

  notes: z.string().optional(),

}).refine((data) => {
  if (!data.date || !data.startTime) return true;

  const [hours, minutes] = data.startTime.split(":").map(Number);
  const [year, month, day] = data.date.split("-").map(Number);

  const selectedDate = new Date(year, month - 1, day, hours, minutes);

  const now = new Date();
  now.setMinutes(now.getMinutes() -2); // tolerancia de 5 min

  return selectedDate.getTime() > now.getTime();
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
    .refine((val) => !val || !isNaN(Date.parse(val)), { message: "Fecha inválida" })
    .refine((val) => {
      if (!val) return true;
      const selected = parseDateLocal(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: "No puedes agendar para días pasados" }),
      status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]).optional(),


  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Hora inválida, usa formato HH:mm" })
  .optional(),

  notes: z.string().optional(),

}).refine((data) => {
  if (!data.date || !data.startTime) return true;

  const [hours, minutes] = data.startTime.split(":").map(Number);
  const [year, month, day] = data.date.split("-").map(Number);

  const selectedDate = new Date(year, month - 1, day, hours, minutes);

  const now = new Date();
  now.setMinutes(now.getMinutes() - 2); // tolerancia de 2 min

  return selectedDate.getTime() > now.getTime();
}, {
  message: "No puedes agendar para una hora pasada",
  path: ["startTime"],
});