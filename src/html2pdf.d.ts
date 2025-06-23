declare module "html2pdf.js" {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: { scale: number };
    jsPDF?: { unit?: string; format: string; orientation: string };
    pagebreak?: {
      mode?: string;
      before?: string;
      after?: string;
      avoid?: string;
    };
  }

  interface Html2Pdf {
    from(element: HTMLElement): Html2Pdf;
    set(options: Html2PdfOptions): Html2Pdf;
    save(): Promise<void>;
    output(type: string): Promise<unknown>;
    outputPdf(type?: string): Promise<unknown>;
    then(callback: (pdf: unknown) => void): Promise<unknown>;
  }

  function html2pdf(): Html2Pdf;
  function html2pdf(
    element: HTMLElement | string,
    options?: Html2PdfOptions
  ): Promise<void>;

  export = html2pdf;
}
