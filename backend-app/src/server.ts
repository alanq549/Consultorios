import app from "./app"; // importa tu app con rutas y middlewares
import { FRONTEND_URL } from "./core/config/env";
import prisma from "./core/lib/prisma";
import { seedDatabase } from "./core/utils/seeder";
import { hora } from "./modules/appointments/appointments.service";
import { cancelPendingAppointmentsJob, } from "./jobs/appointments/cancelPendingAppointments.job";
import { completeAppointmentsJob, } from "./jobs/appointments/completeAppointments.job";

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Server arriba y corriendo 🚀");
});

app.listen(PORT, async () => {
    const now = new Date().toLocaleString(); // Fecha y hora local
  console.log(`Servidor escuchando en http://localhost:${PORT} - Hora de inicio: ${now}`);
  console.log("hora en appointments.service.ts:", hora());
  console.log('Conexión con Prisma establecida:', !!prisma);
  cancelPendingAppointmentsJob();
  completeAppointmentsJob();


  try {
    await seedDatabase();
    } catch (error) {
    console.error("Error en seed:", error);
  }
});

process.on("SIGINT", async () => {
  console.log("Cerrando conexión con Prisma...");
  await prisma.$disconnect();
  console.log("Conexión cerrada, cerrando servidor.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Cerrando conexión con Prisma...");
  await prisma.$disconnect();
  console.log("Conexión cerrada, cerrando servidor.");
  process.exit(0);
});
