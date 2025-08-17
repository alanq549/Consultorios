// modules/appointments/appointments.types.ts
export type CreateAppointmentInput = {
  serviceId: number;
  professionalId: number;
  date: string;
  startTime: string;
  notes?: string;
};
