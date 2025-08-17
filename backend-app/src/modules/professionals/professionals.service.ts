import prisma from "../../core/lib/prisma";

export const getProfessionalProfileByUserId = async (userId: number) => {
  const profile = await prisma.professionalProfile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          lastName: true,
          email: true,
          phone: true,
          avatar: true,
        },
      },
      specialty: true,
      services: true,
      schedules: true,
    },
  });

  if (!profile) {
    throw new Error("Perfil profesional no encontrado");
  }

  // Reorganizamos la estructura:
  return {
    user: profile.user,
    professionalProfile: {
      id: profile.id,
      specialtyId: profile.specialtyId,
      description: profile.description,
      certificates: profile.certificates,
      socialLinks: profile.socialLinks,
      isVerified: profile.isVerified,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
      specialty: profile.specialty,
      services: profile.services,
      schedules: profile.schedules,
    },
  };
};

export const updateProfessionalProfile = async (userId: number, data: any) => {
  const {
    name,
    lastName,
    phone,
    avatar,
    description,
    socialLinks,
    certificates, // <- importante agregarlo
  } = data;

  // Actualizamos user
  await prisma.user.update({
    where: { id: userId },
    data: {
      ...(name && { name }),
      ...(lastName && { lastName }),
      ...(phone && { phone }),
      ...(avatar && { avatar }),
    },
  });

  // Actualizamos professionalProfile
  await prisma.professionalProfile.update({
    where: { userId },
    data: {
      ...(description && { description }),
      ...(socialLinks && { socialLinks }),
      ...(certificates && { certificates }),
    },
  });

  return getProfessionalProfileByUserId(userId);
};


export const getProfessionalsBySpecialty = async (specialtyId: number) => {
  return await prisma.professionalProfile.findMany({
    where: {
      specialtyId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          lastName: true,
          avatar: true,
        },
      },
      specialty: true,
      services: true,
      schedules:true,
    },
  });
};



export const getProfessionalStats = async (professionalId: number) => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  const [citasHoy, pacientesActivos, ingresosMensuales, reseñas, servicios, notificaciones] =
    await Promise.all([
      prisma.appointment.count({
        where: {
          professionalId,
          date: { gte: startOfDay, lte: endOfDay },
          status: "CONFIRMED",
        },
      }),
      prisma.appointment.groupBy({
        by: ["clientId"],
        where: { professionalId, status: "CONFIRMED" },
        _count: true,
      }).then((res) => res.length),
      prisma.appointment.findMany({
        where: {
          professionalId,
          status: "COMPLETED",
          date: { gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
        },
        include: { service: true },
      }).then((appointments) => appointments.reduce((sum, a) => sum + a.service.price, 0)),
      prisma.review.aggregate({
        where: { professionalId },
        _avg: { rating: true },
      }).then((res) => res._avg.rating || 0),
      prisma.service.count({ where: { professionalId } }),
      prisma.notification.count({ where: { userId: professionalId } }),
    ]);

  return {
    citasHoy,
    pacientesActivos,
    ingresosMensuales,
    reseñas,
    servicios,
    notificaciones,
  };
};

