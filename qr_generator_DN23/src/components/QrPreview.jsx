import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';
import { ScanLine, Sparkles } from 'lucide-react';

export const QrPreview = ({ url, fgColor, bgColor, qrRef }) => {
  return (
    <motion.div
      key={`${fgColor}-${bgColor}`}
      initial={{ scale: 0.94, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="relative p-7 rounded-[2.5rem] flex flex-col items-center justify-center group overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(20, 20, 28, 0.85), rgba(8, 8, 12, 0.95))',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: `0 20px 40px -15px rgba(0, 0, 0, 0.8), inset 0 0 25px ${fgColor}15`,
      }}
    >
      {/* Resplandor ambiental dinámico basado en el color del QR */}
      <div 
        className="absolute inset-0 opacity-15 blur-2xl pointer-events-none transition-all duration-700"
        style={{ backgroundColor: fgColor }}
      />

      {/* Esquinas HUD flotantes de precisión */}
      <span className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 rounded-tl-md transition-colors duration-500" style={{ borderColor: fgColor }} />
      <span className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 rounded-tr-md transition-colors duration-500" style={{ borderColor: fgColor }} />
      <span className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 rounded-bl-md transition-colors duration-500" style={{ borderColor: fgColor }} />
      <span className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 rounded-br-md transition-colors duration-500" style={{ borderColor: fgColor }} />

      {/* Insignia superior elegante */}
      <div className="relative z-10 -top-2 px-3.5 py-1 bg-black/70 border border-white/10 rounded-full text-[10px] tracking-widest uppercase font-extrabold text-white flex items-center gap-1.5 shadow-lg backdrop-blur-md">
        <Sparkles size={12} style={{ color: fgColor }} />
        <span></span>
      </div>

      {/* Contenedor principal del QR con acabado cristalino */}
      <div 
        className="relative z-10 p-4 rounded-2xl backdrop-blur-xl overflow-hidden shadow-inner border transition-all duration-500"
        style={{ 
          backgroundColor: `${bgColor}CC`,
          borderColor: 'rgba(255, 255, 255, 0.08)'
        }}
      >
        <QRCodeCanvas
          value={url || ''}
          size={210}
          bgColor={bgColor}
          fgColor={fgColor}
          level="H"
          includeMargin={false}
        />

        {/* Línea de escaneo láser sutil */}
        <motion.div
          animate={{ top: ['0%', '98%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 right-0 h-[2px] pointer-events-none opacity-90 shadow-md"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${fgColor}, transparent)`,
            boxShadow: `0 0 12px ${fgColor}`
          }}
        />
      </div>

      {/* Pie de estado interactivo */}
      <div className="relative z-10 mt-5 flex items-center gap-2 text-[11px] font-semibold text-zinc-400 tracking-wide">
        <ScanLine size={14} className="animate-pulse" style={{ color: fgColor }} />
        <span>QR CODE</span>
      </div>
    </motion.div>
  );
};