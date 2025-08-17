import prisma from "../../../core/lib/prisma";
import { UpdateClientData } from "./client.types";


export const getClientProfileByUserId = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      lastName: true,
      email: true,
      phone: true,
      avatar: true,
      isVerified: true,
      // Si quieres agregar algo relacionado al cliente, acá se puede
      // appointmentsAsClient: true,
      // customConfig: true,
    },
  });

  if (!user) {
    throw new Error("Cliente no encontrado");
  }

  return user;
};


export const updateClientProfile = async (userId: number, data: UpdateClientData) => {
  const updated = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      name: true,
      lastName: true,
      email: true,
      phone: true,
      avatar: true,
      isVerified: true,
    },
  });

  return updated;
};