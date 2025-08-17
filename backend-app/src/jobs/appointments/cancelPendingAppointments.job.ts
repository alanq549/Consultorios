import prisma from "../../core/lib/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

const DEFAULT_TZ = "America/Mexico_City";

export const cancelPendingAppointmentsJob = async () => {
  const now = dayjs().tz(DEFAULT_TZ);

  try {
    const pendingAppointments = await prisma.appointment.findMany({
      where: {
        status: "PENDING",
      },
    });

    const expired = pendingAppointments.filter((appt) => {
      // Construir la fecha/hora real de la cita
      const dateStr = appt.date.toISOString().slice(0, 10); // "YYYY-MM-DD"
      const timeStr = appt.startTime; // "HH:mm"
      const appointmentDateTime = dayjs.tz(`${dateStr}T${timeStr}:00`, DEFAULT_TZ);

      // Si la fecha/hora de la cita ya pasó y no está confirmada, se considera expirada
      return now.isAfter(appointmentDateTime);
    });

    for (const appt of expired) {
      await prisma.appointment.update({
        where: { id: appt.id },
        data: { status: "CANCELLED" },
      });
      console.log(`⛔ Cita ${appt.id} cancelada por tiempo expirado (no confirmada a tiempo)`);
    }

    console.log(`🔁 Job cancelación terminado. Total canceladas: ${expired.length}`);
  } catch (error) {
    console.error("❌ Error al ejecutar cancelPendingAppointmentsJob:", error);
  }
};
