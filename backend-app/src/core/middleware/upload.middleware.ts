// src/core/middleware/upload.middleware.ts
import multer from "multer";
import path from "path";
import fs from "fs";

// Carpeta destino según el tipo
const folders: Record<"avatar" | "certificates", string> = {
  avatar: "avatars",
  certificates: "certificates",
};

const getDestination = (fieldname: string) => {
  const folder = (folders as Record<string, string>)[fieldname] || "";
  return path.join(__dirname, "..", "..", "uploads", folder);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest = getDestination(file.fieldname);
    fs.mkdirSync(dest, { recursive: true }); // crea si no existe
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

export const upload = multer({ storage });
