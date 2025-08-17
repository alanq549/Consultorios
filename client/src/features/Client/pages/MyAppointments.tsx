import { useMyClientAppointments } from "@/features/appointments/appointmentsHooks";
import AppointmentCard from "@/features/Client/components/AppointmentCard";
import '@/styles/features/client/MyAppointmentsClient.css';

export default function MyAppointmentsClient() {
  const { data: appointments, isLoading, isError } = useMyClientAppointments();

  if (isLoading) return <div className="loading-message">Cargando historial...</div>;
  if (isError) return <div className="error-message">Error al cargar historial</div>;
  if (!appointments || appointments.length === 0) return <div className="empty-message">No tienes citas aún.</div>;

  return (
    <div className="appointments-container">
      <h2 className="appointments-title">Mis Citas</h2>
      <div className="appointments-list">
        {appointments.map((app) => (
          <AppointmentCard key={app.id} appointment={app} />
        ))}
      </div>
    </div>
  );
}