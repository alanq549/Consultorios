import { Request, Response } from "express";
import {
  createService,
  getMyServices,
  updateService,
  deleteService,
  getAllActiveServices,
  getServicesByProfessionalId,
} from "./services.service";
import { createServiceSchema, updateServiceSchema } from "./services.validation";
import { AuthenticatedRequest } from "../../core/middleware/auth.middleware";
import { getProfessionalIdByUserId } from "../../core/utils/getProfessionalId";

export const createServiceController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const validated = createServiceSchema.parse(req.body);
    const userId = req.user!.id;

    const service = await createService(userId, validated);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({
      message: err instanceof Error ? err.message : "Datos inválidos",
      error: err,
    });
  }
};


export const getMyServicesController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const professionalId = await getProfessionalIdByUserId(req.user!.id);
    const services = await getMyServices(professionalId);
    res.json(services);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllPublicServicesController = async (_req: Request, res: Response) => {
  const services = await getAllActiveServices();
  res.json(services);
};

export const getServicesByProfessionalIdController = async (req: Request, res: Response) => {
  const professionalId = Number(req.params.professionalId);

  if (isNaN(professionalId)) {
    return res.status(400).json({ message: "ID de profesional inválido" });
  }

  const services = await getServicesByProfessionalId(professionalId);
  res.json(services);
};

export const updateServiceController = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const validated = updateServiceSchema.parse(req.body);
    const { id } = req.params;

    const professionalId = await getProfessionalIdByUserId(req.user!.id);

    const result = await updateService(Number(id), professionalId, validated);
    if (result.count === 0) {
      return res.status(404).json({ message: "Servicio no encontrado o sin permiso" });
    }
    res.json({ message: "Servicio actualizado correctamente" });
  } catch (err) {
    res.status(400).json({ message: "Datos inválidos", error: err });
  }
};

export const deleteServiceController = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const professionalId = await getProfessionalIdByUserId(req.user!.id);

  const result = await deleteService(Number(id), professionalId);
  if (result.count === 0) {
    return res.status(404).json({ message: "Servicio no encontrado o sin permiso" });
  }
  res.status(204).send();
};
