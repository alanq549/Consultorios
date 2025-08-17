/// specialties.routes.ts
import { Router } from "express";
import { createSpecialtyHandler, deleteSpecialtyHandler, getSpecialtiesHandler, updateSpecialtyHandler } from "./specialties.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";
import { requireRole } from "../../core/middleware/role.middleware";

const router = Router();

router.get("/",  getSpecialtiesHandler);
router.post("/", authenticateToken, requireRole("ADMIN"), createSpecialtyHandler);
router.patch("/:id", authenticateToken, requireRole("ADMIN"), updateSpecialtyHandler);
router.delete("/:id", authenticateToken, requireRole("ADMIN"), deleteSpecialtyHandler);


export default router;
