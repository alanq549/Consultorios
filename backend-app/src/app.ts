import express from "express";
import cors from "cors";
import specialtiesRoutes from "./modules/specialties/specialties.routes";
import authRoutes from "./modules/auth/auth.routes";
import  schedules from "./modules/schedules/schedules.routes";
import services from "./modules/services/services.routes";
import appointments from "./modules/appointments/appointments.routes";
import professionals from "./modules/professionals/professionals.routes";
import client from "./modules/user/client/client.routes"
import configRoutes from "./modules/customConfig/customConfig.routes";
import notifications from "./modules/notifications/notifications.routes"
import admin from "./modules/user/admin/admin.rutes"
import path from "path";
import { FRONTEND_URL } from "./core/config/env"; // o donde tengas tu URL

const app = express();

// 🛡️ Habilita CORS antes de cualquier otra cosa
app.use(cors({
  origin: FRONTEND_URL, 
  credentials: true,    // si usás cookies o headers personalizados
}));

app.use(express.static(path.join(__dirname, "..", "public", "")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Middleware para que Express entienda JSON en el body
app.use("/api/auth", authRoutes);
app.use("/api/notifications", notifications);
app.use(express.json());

// Rutas
app.use("/api/admin", admin);
app.use("/api/appointments", appointments);
app.use("/api/services", services);
app.use("/api/professionals",professionals)
app.use("/api/specialties", specialtiesRoutes);
app.use("/api/schedules", schedules);
app.use("/api/client", client)
app.use("/api/config", configRoutes);


export default app;
