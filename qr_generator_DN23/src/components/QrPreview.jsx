import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';
import { ScanLine, ShieldCheck } from 'lucide-react';

export const QrPreview = ({ url, fgColor, bgColor, qrRef }) => {
  return (
    <motion.div
      key={`${fgColor}-${bgColor}`}
      initial={{ scale: 0.92, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="relative p-6 rounded-3xl qr-holo-frame flex flex-col items-center justify-center group"
    >
      {/* Esquinas tipo visor tecnológico (HUD) */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#00E5FF] rounded-tl-sm" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#00E5FF] rounded-tr-sm" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#FACC15] rounded-bl-sm" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FACC15] rounded-br-sm" />

      {/* Etiqueta superior flotante */}
      <div className="absolute -top-3.5 px-3.5 py-1 bg-zinc-950 border border-[#00E5FF]/40 rounded-full text-[10px] tracking-widest uppercase font-bold text-[#00E5FF] flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
        <ShieldCheck size={12} className="text-[#FACC15]" />
        <span>MATRIX READY</span>
      </div>

      {/* Contenedor interno del QR con láser animado */}
      <div className="relative p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md overflow-hidden mt-1">
        <QRCodeCanvas
          value={url || 'https://github.com'}
          size={210}
          bgColor={bgColor}
          fgColor={fgColor}
          level="H"
          includeMargin={false}
        />

        {/* Línea de escaneo láser continua */}
        <motion.div
          animate={{ top: ['0%', '96%', '0%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_#00E5FF] pointer-events-none opacity-80"
        />
      </div>

      {/* Estado inferior */}
      <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-zinc-400">
        <ScanLine size={14} className="text-[#FACC15] animate-pulse" />
        <span>QR Code</span>
      </div>
    </motion.div>
  );
};