import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = import.meta.env.VITE_STATIC_URL + "/pdf.worker.min.js";
