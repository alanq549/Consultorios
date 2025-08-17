import { Router } from "express";
import { authenticateToken } from "../../core/middleware/auth.middleware";
import { requireRole } from "../../core/middleware/role.middleware";
import {
  getMyProfessionalProfileController,
  getProfessionalsBySpecialtyController,
  getStats,
  updateMyProfessionalProfileController
} from "./professionals.controller";
import { upload } from "../../core/middleware/upload.middleware";


const router = Router();

router.use(authenticateToken, requireRole("PROFESSIONAL","CLIENT"));

router.get("/me", getMyProfessionalProfileController);
router.patch(
  "/me",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "certificates", maxCount: 3 },
  ]),
  updateMyProfessionalProfileController
);

router.get("/by-specialty/:id", getProfessionalsBySpecialtyController);

router.get(
  "/stats",
  authenticateToken,
  requireRole("PROFESSIONAL"),
  getStats
);


export default router;
