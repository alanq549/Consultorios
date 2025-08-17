import prisma from "../../core/lib/prisma";
import { UpdateConfigDTO } from "./customConfig.types";

export const getUserConfig = async (userId: number) => {
  return await prisma.customConfig.findUnique({ where: { userId } });
};

export const updateUserConfig = async (userId: number, data: UpdateConfigDTO) => {
  return await prisma.customConfig.update({
    where: { userId },
    data,
  });
};
