// src/modules/users/users.service.ts
import prisma from "../../../core/lib/prisma";

export const getAllUsersWithProfiles = async () => {
  return await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN",
      },
    },
    select: {
      id: true,
      name: true,
      lastName: true,
      email: true,
      role: true,
      phone: true,
      avatar: true,
      isVerified: true,
      createdAt: true,
      professionalProfile: {
        select: {
          id: true,
          specialtyId: true,
          description: true,
          certificates: true,
          socialLinks: true,
          isVerified: true,
          specialty: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      reviewsReceived: {
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          client: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getAdminStatsService = async () => {
  const [totalUsers, totalProfessionals, totalClients, totalSpecialties, totalAppointments] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: "PROFESSIONAL" } }),
      prisma.user.count({ where: { role: "CLIENT" } }),
      prisma.specialty.count(),
      prisma.appointment.count(),
    ]);

  return { totalUsers, totalProfessionals, totalClients, totalSpecialties, totalAppointments };
};
