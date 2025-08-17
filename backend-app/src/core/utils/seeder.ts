import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

export const seedDatabase = async () => {
  console.log("Seed inicializando...");

  // Crear admin si no existe
  const adminEmail = "alanqff1@gmail.com";
  let admin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!admin) {
    const hashedPassword = await bcrypt.hash("123456a", 10);
    admin = await prisma.user.create({
      data: {
        name: "Admin",
        lastName: "Default",
        email: adminEmail,
        password: hashedPassword,
        role: "ADMIN",
        isVerified: true,
      },
    });
    console.log("Admin creado");
  } else {
    console.log("Admin ya existe");
  }

  // Crear configuración por defecto para admin si no existe
  const existingConfig = await prisma.customConfig.findUnique({
    where: { userId: admin.id },
  });

  if (!existingConfig) {
    await prisma.customConfig.create({
      data: {
        userId: admin.id,
        language: "es",
        theme: "light",
        layout: "SIDEBAR",
        notificationsEnabled: true,
        preferences: {}, // Si el campo es JSON, así está bien
      },
    });
    console.log("Config por defecto creada para admin");
  } else {
    console.log("Config por defecto ya existe para admin");
  }

  // Crear especialidades base si no existen
  const defaultSpecialties = [
    { name: "Psicología", description: "Salud mental y bienestar" },
    { name: "Cardiología", description: "Especialidad en corazón" },
    { name: "Dermatología", description: "Cuidado de la piel" },
  ];

  for (const specialty of defaultSpecialties) {
    const exists = await prisma.specialty.findUnique({
      where: { name: specialty.name },
    });
    if (!exists) {
      await prisma.specialty.create({ data: specialty });
      console.log(`Especialidad '${specialty.name}' creada`);
    }
  }

  console.log("Seed completado");
};
