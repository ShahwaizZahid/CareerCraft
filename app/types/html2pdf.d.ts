// types/html2pdf.d.ts
declare module "html2pdf.js" {
  import { jsPDF } from "jspdf";

  interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: Partial<Html2Canvas.Options>;
    jsPDF?: {
      unit?: string;
      format?: string | number[];
      orientation?: "portrait" | "landscape";
    };
    pagebreak?: { mode?: string[] | string };
  }

  interface Html2Pdf {
    set: (options: Html2PdfOptions) => Html2Pdf;
    from: (element: HTMLElement | string) => Html2Pdf;
    save: (filename?: string) => Promise<void>;
    outputPdf: () => jsPDF;
  }

  const html2pdf: () => Html2Pdf;
  export default html2pdf;
}
