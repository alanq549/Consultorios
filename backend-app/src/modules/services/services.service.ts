import prisma from "../../core/lib/prisma";
import { CreateServiceDTO, UpdateServiceDTO } from "./services.types";


export const createService = async (userId: number, data: CreateServiceDTO) => {
  const profile = await prisma.professionalProfile.findUnique({
    where: { userId },
  });

  if (!profile) {
    throw new Error("Perfil profesional no encontrado");
  }

  return prisma.service.create({
    data: {
      ...data,
      professionalId: profile.id,
    },
  });
};

export const getMyServices = async (professionalId: number) => {
  return prisma.service.findMany({
    where: {
      professionalId,
      isActive: true,
    },
  });
};

export const getAllActiveServices = async () => {
  return prisma.service.findMany({
    where: {
      isActive: true,
    },
    include: {
      professional: {
        include: {
          user: {
            select: { id: true, name: true }, // 👈 Aquí está 'name'
          },
          specialty: {
            select: { id: true, name: true },
          },
        },
      },
    },
  });
};

export const getServicesByProfessionalId = async (professionalId: number) => {
  return prisma.service.findMany({
    where: {
      isActive: true,
      professionalId,
    },
    include: {
      professional: {
        include: {
          user: {
            select: { id: true, name: true },
          },
          specialty: {
            select: { id: true, name: true },
          },
        },
      },
    },
  });
};

export const updateService = async (id: number, professionalId: number, data: UpdateServiceDTO) => {
  return prisma.service.updateMany({
    where: { id, professionalId },
    data,
  });
};

export const deleteService = async (id: number, professionalId: number) => {
  return prisma.service.updateMany({
    where: { id, professionalId },
    data: { isActive: false },
  });
};
