// modules/appointments/appointments.controller.ts
import { Response } from "express";
import {
  createAppointment,
  getAppointmentsByClient,
  getAppointmentsByProfessional,
  getAllAppointments,
  validarProfesional,
  createGuestClient,
  updateAppointment,
} from "./appointments.service";
import { createAppointmentByProfessionalSchema, createAppointmentSchema, updateAppointmentSchema  } from "./appointments.validation";
import { AuthenticatedRequest } from "../../core/middleware/auth.middleware"; 


export const createAppointmentController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const clientId = req.user?.id;

  if (!clientId) {
    return res.status(401).json({ message: "No autorizado" });
  }

  console.log("Request body recibido:", req.body); // 👈 log de lo que envía el front
  console.log("Hora actual del servidor:", new Date().toISOString());

  const parsed = createAppointmentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.format() });
  }

  try {
    // Validar que el professionalId sea válido y corresponda a un profesional
    await validarProfesional(parsed.data.professionalId);

    // Crear la cita sólo si pasa la validación
    const appointment = await createAppointment(parsed.data, clientId);

    res.status(201).json({ message: "Cita creada exitosamente", appointment });
  } catch (err: any) {
    if (
      err.message ===
      "El professionalId no corresponde a un profesional válido."
    ) {
      return res.status(422).json({ message: err.message });
    }

    if (err.code === "P2002") {
      return res
        .status(409)
        .json({ message: "Ya existe una cita en ese horario" });
    }

    

    console.error("Error al crear la cita:", err);
    res.status(500).json({ message: "Error interno al crear la cita" });
  }
};

export const createAppointmentByProfessionalController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const professionalId = req.user?.id;

  if (!professionalId) {
    return res.status(401).json({ message: "No autorizado" });
  }

  const parsed = createAppointmentByProfessionalSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.format() });
  }

  try {
    const { clientId, guestClient, ...appointmentData } = parsed.data;

    let finalClientId: number;

    if (clientId) {
      finalClientId = clientId;
    } else if (guestClient) {
      const newClient = await createGuestClient(guestClient);
      finalClientId = newClient.id;
    } else {
      return res.status(400).json({
        message: "Se requiere un clientId o los datos de guestClient",
      });
    }

    const appointment = await createAppointment(
      {
        ...appointmentData,
        professionalId,
      },
      finalClientId
    );

    res.status(201).json({
      message: "Cita creada correctamente por el profesional",
      appointment,
    });
  } catch (err: any) {
    console.error("Error al crear cita como profesional:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getMyAppointmentsClient = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const clientId = req.user?.id;
    if (!clientId) return res.status(401).json({ message: "No autorizado" });

    const result = await getAppointmentsByClient(clientId);
    res.json(result);
  } catch (error) {
    console.error("Error al obtener citas:", error as Error);
    res
      .status(500)
      .json({
        message: "Error al obtener citas del cliente",
        error: (error as Error).message || String(error),
      });
  }
};

export const getMyAppointmentsProfessional = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const professionalId = req.user?.id;
    if (!professionalId)
      return res.status(401).json({ message: "No autorizado" });

    const result = await getAppointmentsByProfessional(professionalId);
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener citas del profesional", error });
  }
};

export const getAllAppointmentsController = async (
  _req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const result = await getAllAppointments();
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener todas las citas", error });
  }
};

export const updateAppointmentController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const appointmentId = Number(req.params.id);
  if (isNaN(appointmentId)) {
    return res.status(400).json({ message: "ID de cita inválido" });
  }

  // Validar datos entrantes
  const parsed = updateAppointmentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.format() });
  }

  // TODO: Validar permisos según rol y propietario de la cita aquí

  try {
    if (parsed.data.professionalId) {
      await validarProfesional(parsed.data.professionalId);
    }

    const updated = await updateAppointment(appointmentId, parsed.data);

    res.status(200).json({
      message: "Cita actualizada exitosamente",
      appointment: updated,
    });
  } catch (err: any) {
    if (err.message === "El professionalId no corresponde a un profesional válido.") {
      return res.status(422).json({ message: err.message });
    }

    if (err.code === "P2002") {
      return res.status(409).json({ message: "Ya existe una cita en ese horario" });
    }

    console.error("Error al actualizar la cita:", err);
    res.status(500).json({ message: "Error interno al actualizar la cita" });
  }
};
