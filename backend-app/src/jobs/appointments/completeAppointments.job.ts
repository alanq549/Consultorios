import prisma from "../../core/lib/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import { NotificationEvents } from "../../modules/notifications/notification.events";

dayjs.extend(utc);
dayjs.extend(tz);

const DEFAULT_TZ = "America/Mexico_City";

export const completeAppointmentsJob = async () => {
  const now = dayjs().tz(DEFAULT_TZ);

  try {
    // Buscar citas CONFIRMED que ya hayan terminado
    const appointments = await prisma.appointment.findMany({
      where: {
        status: "CONFIRMED",
        service: {
          durationMinutes: {
            gt: 0,
          },
        },
      },
      include: {
        service: true,
        professional: true,  // Necesitamos el nombre del profesional para la notificación
      },
    });

    const updates = appointments.filter((appt) => {
      const dateStr = appt.date.toISOString().slice(0, 10);
      const start = dayjs.tz(`${dateStr}T${appt.startTime}:00`, DEFAULT_TZ);
      const end = start.add(appt.service.durationMinutes, "minute");
      return now.isAfter(end);
    });

    for (const appt of updates) {
  await prisma.appointment.update({
    where: { id: appt.id },
    data: { status: "COMPLETED" },
  });

  console.log(`✅ Cita ${appt.id} marcada como COMPLETED`);

  if (appt.clientId === null) {
    console.warn(`⚠️ La cita ${appt.id} no tiene clientId, se omite notificación.`);
    continue; // saltar a la siguiente cita
  }

  await NotificationEvents.appointmentCompletedForClient(
    appt.clientId,
    appt.professional.name,
    appt.id
  );
}

    console.log(`🔁 Job completado. Total actualizadas: ${updates.length}`);
  } catch (error) {
    console.error("❌ Error al ejecutar completeAppointmentsJob:", error);
  }
};
