import { Request, Response } from "express";
import {
  getAvailableSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getAvailableSchedulesByProfessionalId,
} from "./schedules.service";
import {
  updateScheduleSchema,
  getAvailableSchedulesSchema,
} from "./schedules.validation";
import { AuthenticatedRequest } from "../../core/middleware/auth.middleware";
import { getProfessionalIdByUserId } from "../../core/utils/getProfessionalId";

// get available schedules controller
export const getAvailableSchedulesController = async (
  req: Request,
  res: Response
) => {
  try {
    const professionalId = parseInt(req.params.professionalId);

    // Validar con Zod
    const result = getAvailableSchedulesSchema.safeParse({ professionalId });

    if (!result.success) {
      return res.status(400).json({ errors: result.error.format() });
    }

    const availableSchedules = await getAvailableSchedules(professionalId);
    res.json(availableSchedules);
  } catch (error) {
    console.error("Error al obtener horarios disponibles:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// get my schedules controller
export const getMySchedulesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {

  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "No autenticado" });
    }
    const professionalId = await getProfessionalIdByUserId(userId);

    const schedules = await getAvailableSchedulesByProfessionalId(professionalId);

    res.json(schedules);
  } catch (error: any) {
    if (error.message?.includes("Profesional no encontrado")) {
      return res.status(404).json({ message: error.message });
    }

    console.error("Error al obtener horarios del usuario logueado:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// create schedule controller
export const createScheduleController = async (req: AuthenticatedRequest, res: Response) => {

  try {
    const userId = req.user!.id;
    const professionalId = await getProfessionalIdByUserId(userId);
    
    const data = req.body;
    const schedules = Array.isArray(data) ? data : [data];
    const createdSchedules = [];

    for (const sched of schedules) {
      const { dayOfWeek, startTime, endTime, isAvailable } = sched;

      const newSchedule = await createSchedule({
        professionalId,
        dayOfWeek,
        startTime,
        endTime,
        isAvailable: isAvailable ?? true,
      });

      createdSchedules.push(newSchedule);
    }

    res.status(201).json(createdSchedules);
  } catch (error: any) {
    console.error("Error al crear horario:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Horario duplicado" });
    }
    res.status(500).json({ message: "Error interno al crear horario" });
  }
};
/// update schedule controller
export const updateScheduleController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const scheduleId = parseInt(req.params.id);
    if (isNaN(scheduleId)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const parsed = updateScheduleSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Datos inválidos", errors: parsed.error.format() });
    }

    const professionalId = await getProfessionalIdByUserId(req.user!.id);

const updatedSchedule = await updateSchedule(scheduleId, professionalId, parsed.data);
    if (!updatedSchedule) {
      return res.status(403).json({ message: "No tienes permiso para modificar este horario" });
    }

    res.json(updatedSchedule);
  } catch (error) {
    console.error("Error al actualizar horario:", error);
    res.status(500).json({ message: "Error al actualizar horario" });
  }
};

/// delete schedule controller
export const deleteScheduleController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const scheduleId = parseInt(req.params.id);
    if (isNaN(scheduleId)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const professionalId = await getProfessionalIdByUserId(req.user!.id);

    const deleted = await deleteSchedule(scheduleId, professionalId); // 🔐 validación en capa service
    if (!deleted) {
      return res.status(403).json({ message: "No tienes permiso para eliminar este horario" });
    }

    res.status(204).send();
  } catch (error: any) {
    if (error.message.includes("no existe")) {
      return res.status(404).json({ message: "El horario no existe o ya fue eliminado" });
    }
    console.error("Error al eliminar horario:", error);
    res.status(500).json({ message: "Error al eliminar horario" });
  }
};
