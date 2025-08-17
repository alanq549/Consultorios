
import { PrismaClient } from "./prisma/generated";

const prisma = new PrismaClient({
  // Opciones como logging, etc. acá si quieres
});

// Evitar multiples instancias en hot reload (dev)
declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClient = global.prisma || prisma;
if (process.env.NODE_ENV !== "production") global.prisma = prismaClient;

export default prismaClient;
