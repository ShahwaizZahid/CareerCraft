declare module 'html2pdf.js';
declare module 'html2pdf.js/dist/html2pdf.min.js' {
  const html2pdf: () => {
    set: (options: any) => any;
    from: (element: HTMLElement | string) => any;
    save: () => Promise<void>;
  };
  export default html2pdf;
}
