/// specialties.controller.ts
import { Request, Response } from "express";
import { createSpecialty, getAllSpecialties, updateSpecialty, deleteSpecialty  } from "./specialties.service";
import { createSpecialtySchema } from "./specialties.validation";

export const createSpecialtyHandler = async (req: Request, res: Response) => {
  const parsed = createSpecialtySchema.safeParse(req.body);

  if (!parsed.success) { // Fix: Access `parsed.error.issues` instead of `parsed.error.errors`
    return res.status(400).json({ message: "Datos inválidos", errors: parsed.error.issues });
  }

  try {
    const specialty = await createSpecialty(parsed.data);
    return res.status(201).json(specialty);
  } catch (error: unknown) {
    return res.status(500).json({ message: "Error al crear la especialidad" });
  }
};

export const updateSpecialtyHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  // Validar que data tenga al menos un campo válido para actualizar
  const parsed = createSpecialtySchema.partial().safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Datos inválidos", errors: parsed.error.issues });
  }

  try {
    const updated = await updateSpecialty(id, parsed.data);
    return res.json(updated);
  } catch (error: unknown) {
    return res.status(500).json({ message: "Error al actualizar la especialidad" });
  }
};

export const getSpecialtiesHandler = async (_req: Request, res: Response) => {
  try {
    const specialties = await getAllSpecialties();
    return res.status(200).json(specialties);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener las especialidades" });
  }
};


export const deleteSpecialtyHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  try {
    await deleteSpecialty(id);
    return res.json({ message: "Especialidad eliminada correctamente" });
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Error al eliminar la especialidad" });
  }
};