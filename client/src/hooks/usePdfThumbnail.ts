import "@/pdfWorker"; // worker ya definido
import { useEffect, useState } from "react";
import { getDocument } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";

type UsePdfThumbnailProps = {
  pdfUrl: string;
  scale?: number;
};

export function usePdfThumbnail({ pdfUrl, scale = 1.0 }: UsePdfThumbnailProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect ejecutado, pdfUrl:", pdfUrl);
    if (!pdfUrl) return;

    let pdfDoc: PDFDocumentProxy;

    const loadPdf = async () => {
      try {
        console.log("Descargando PDF:", pdfUrl);
        const res = await fetch(pdfUrl);
        console.log("Fetch completado, status:", res.status);
        const arrayBuffer = await res.arrayBuffer();
        console.log("ArrayBuffer obtenido, bytes:", arrayBuffer.byteLength);

        const loadingTask = getDocument({ data: arrayBuffer });
        pdfDoc = await loadingTask.promise;
        console.log("PDF cargado, páginas:", pdfDoc.numPages);

        try {
          const page = await pdfDoc.getPage(1);
          console.log("Página obtenida:", page.pageNumber);

          const viewport = page.getViewport({ scale });
          console.log("Viewport:", viewport.width, viewport.height);

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const context = canvas.getContext("2d");
          if (!context) {
            console.error("No se pudo obtener el contexto del canvas");
            return;
          }
          console.log("Canvas creado:", canvas.width, canvas.height);

          try {
await page.render({
  canvasContext: context,
  viewport,
}).promise;
            console.log("Renderizado completado");

            const dataUrl = canvas.toDataURL();
            console.log("DataURL generado, tamaño:", dataUrl.length);
            setThumbnailUrl(dataUrl);
          } catch (err) {
            console.error("Error durante renderizado de página:", err);
          }
        } catch (err) {
          console.error("Error obteniendo la página 1:", err);
        }
      } catch (err) {
        console.error("Error descargando o cargando PDF:", err);
      }
    };

    loadPdf();

    return () => {
      pdfDoc?.destroy();
    };
  }, [pdfUrl, scale]);

  return thumbnailUrl;
}
