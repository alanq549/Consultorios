// utils/getProfessionalId.ts
import  prisma  from "../lib/prisma"; // ajusta la ruta según tu estructura

export const getProfessionalIdByUserId = async (userId: number): Promise<number> => {
  const professional = await prisma.professionalProfile.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!professional) {
    throw new Error("Perfil profesional no encontrado");
  }

  return professional.id;
};
