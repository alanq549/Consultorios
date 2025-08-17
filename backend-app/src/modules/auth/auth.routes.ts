import { Router } from "express";
import {
  forgotPasswordHandler,
  loginHandler,
  registerUserController,
  resetPasswordHandler,
  verifyUserHandler,
} from "./auth.controller";
import { upload } from "../../core/middleware/upload.middleware";
import express from "express";


const router = Router();

router.post("/login", express.json(), loginHandler);
router.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "certificates", maxCount: 5 },
  ]),
  registerUserController // validación se mueve adentro
);

router.get("/verify", verifyUserHandler); // CAMBIADO: ahora sí es un GET
router.post("/forgot-password", forgotPasswordHandler);
router.post("/reset-password", resetPasswordHandler);


export default router;
