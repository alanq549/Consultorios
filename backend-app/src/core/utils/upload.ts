// core/lib/upload.ts

import multer from "multer";
import path from "path";
import fs from "fs";

// Crear carpeta si no existe
const uploadsPath = path.join(__dirname, "..", "..", "..", "uploads");
if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  },
});

export const upload = multer({ storage });
