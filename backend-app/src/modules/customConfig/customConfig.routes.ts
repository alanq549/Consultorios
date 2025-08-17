import { Router } from "express";
import { getConfig, updateConfig } from "./customConfig.controller";
import { authenticateToken } from "../../core/middleware/auth.middleware";

const router = Router();

router.use(authenticateToken);

router.get("/", getConfig);
router.patch("/", updateConfig);

export default router;
