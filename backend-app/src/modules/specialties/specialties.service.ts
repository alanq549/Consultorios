/// specialties.service.ts
import prisma from "../../core/lib/prisma";
import { SpecialtyInput } from "./specialties.types";

export const createSpecialty = async (data: SpecialtyInput) => {
  return await prisma.specialty.create({
    data,
  });
};

export const updateSpecialty = async (id: number, data: Partial<SpecialtyInput>) => {
  return await prisma.specialty.update({
    where: { id },
    data,
  });
};


export const getAllSpecialties = async () => {
  return await prisma.specialty.findMany({
    where: { isActive: true },
  });
};


export const deleteSpecialty = async (id: number) => {
  // Verificamos si hay profesionales asociados antes
  const professionalsCount = await prisma.professionalProfile.count({
    where: { specialtyId: id },
  });

  if (professionalsCount > 0) {
    throw new Error("No se puede eliminar una especialidad asociada a profesionales");
  }

  // Borrado lógico (ponemos isActive = false)
  return await prisma.specialty.update({
    where: { id },
    data: { isActive: false },
  });
};

