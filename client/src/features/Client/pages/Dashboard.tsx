import DashboardCard from "../components/DashboardCard";

const DashboardClient = () => {
  return (
    <div className="dashboard-container p-4 space-y-6">
      <h1 className="text-2xl font-bold">Bienvenido/a al Dashboard Cliente</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Aquí puedes ver un resumen de tu actividad como profesional de salud.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Citas Hoy" value={5} icon="📅" />
        <DashboardCard title="Pacientes Activos" value={12} icon="🧑‍⚕️" />
        <DashboardCard title="Ingresos Mensuales" value="$3,200" icon="💰" />
        <DashboardCard title="Reseñas" value="4.8 / 5" icon="⭐" />
        <DashboardCard title="Servicios Disponibles" value={4} icon="🛠️" />
        <DashboardCard title="Notificaciones" value={2} icon="🔔" />
      </div>
    </div>
  );
};

export default DashboardClient;
