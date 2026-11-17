import { toast } from 'sonner';

export const useQrActions = (qrRef) => {
  // Descargar como PNG de alta calidad
  const downloadQr = (fileName = 'qr_DN23.png') => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('¡Código QR descargado correctamente!', {
      style: { background: '#09090b', color: '#facc15', border: '1px solid #007bff' }
    });
  };

  // Copiar imagen directamente al portapapeles
  const copyQrToClipboard = async () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) throw new Error('Error al generar la imagen');
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);

        toast.success('Imagen QR copiada al portapapeles', {
          description: 'Ya puedes pegarla directamente con Ctrl+V',
          style: { background: '#09090b', color: '#00e5ff', border: '1px solid #facc15' }
        });
      });
    } catch (error) {
      toast.error('No se pudo copiar la imagen. Intenta descargarla.');
    }
  };

  return { downloadQr, copyQrToClipboard };
};