import type { Appointment } from "@/features/appointments/types";
import './AppointmentCard.css';

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const date = new Date(appointment.dateTimeLocal);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const staticUrl = import.meta.env.VITE_STATIC_URL;

  const statusColor = {
    COMPLETED: 'bg-green-100 text-green-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
    CANCELLED: 'bg-red-100 text-red-800',
  }[appointment.status] || 'bg-gray-100 text-gray-800';

  const paymentColor = {
    PAID: 'bg-green-100 text-green-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
    FAILED: 'bg-red-100 text-red-800',
  }[appointment.paymentStatus] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 mb-6 transition hover:shadow-lg">
      <div className="flex items-start gap-5">
        {/* Avatar Profesional */}
        <img
          src={`${staticUrl}${appointment.professional.avatar}`}
          alt={`Foto de ${appointment.professional.name}`}
          className="w-20 h-20 rounded-full object-cover border border-gray-300 dark:border-zinc-600"
        />

        {/* Info Principal */}
        <div className="flex-1">
          {/* Encabezado */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {appointment.professional.name} {appointment.professional.lastName}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.service.name}</p>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
              {appointment.status}
            </span>
          </div>

          {/* Detalles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6 text-sm">
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-400">Fecha:</span> {dateString}
            </div>
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-400">Hora:</span> {timeString}
            </div>
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-400">Duración:</span> {appointment.service.durationMinutes} mins
            </div>
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-400">Precio:</span> ${appointment.service.price}
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-600 dark:text-gray-400">Pago:</span>
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${paymentColor}`}>
                {appointment.paymentStatus}
              </span>
            </div>

            {appointment.notes && (
              <div className="col-span-2">
                <span className="font-medium text-gray-600 dark:text-gray-400">Notas:</span> {appointment.notes}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
