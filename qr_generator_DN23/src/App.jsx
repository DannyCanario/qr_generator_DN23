import { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QrCode,
  Download,
  Copy,
  Link2,
  Cpu,
  Zap,
  ClipboardPaste,
  X,
  Palette,
} from 'lucide-react';
import { QrPreview } from './components/QrPreview';
import { CyberBackground } from './components/CyberBackground';
import { useQrActions } from './hooks/useQrActions';

export default function App() {
  const [url, setUrl] = useState('https://github.com');
  // Iniciamos con una combinación impactante: Midnight Purple & Neón Magenta
  const [fgColor, setFgColor] = useState('#F43F5E');
  const [bgColor, setBgColor] = useState('#0B0710');
  const qrRef = useRef(null);

  const { downloadQr, copyQrToClipboard } = useQrActions(qrRef);

  // NUEVOS PATRONES DE COLORES VARIADOS Y DE ALTA GAMA
  const colorPresets = [
    {
      name: 'Neon Cyber',
      fg: '#F43F5E', // Rosa Neón Vibrante
      bg: '#0B0710', // Morado Noche Profundo
      borderGlow: 'rgba(244, 63, 94, 0.4)',
    },
    {
      name: 'Emerald Matrix',
      fg: '#10B981', // Esmeralda Brillante
      bg: '#030E09', // Negro Verdoso Oscuro
      borderGlow: 'rgba(16, 185, 129, 0.4)',
    },
    {
      name: 'Electric Indigo',
      fg: '#8B5CF6', // Índigo Neón
      bg: '#080513', // Azul Oscuro Espacial
      borderGlow: 'rgba(139, 92, 246, 0.4)',
    },
    {
      name: 'Cyber Sunset',
      fg: '#FB923C', // Naranja Atardecer
      bg: '#120804', // Carbón Cálido
      borderGlow: 'rgba(251, 146, 60, 0.4)',
    },
    {
      name: 'Ice Cyan',
      fg: '#06B6D4', // Cian Intenso
      bg: '#040E12', // Azul Hielo Oscuro
      borderGlow: 'rgba(6, 182, 212, 0.4)',
    },
    {
      name: 'Pure Titanium',
      fg: '#FAFAFA', // Blanco Puro Metálico
      bg: '#121217', // Gris Titanio
      borderGlow: 'rgba(250, 250, 250, 0.25)',
    },
  ];

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        toast.success('Enlace pegado desde el portapapeles', {
          style: { background: '#09090b', color: '#06B6D4', border: '1px solid #06B6D4' },
        });
      }
    } catch {
      toast.error('Permiso denegado para leer el portapapeles');
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 sm:p-6 relative selection:bg-[#06B6D4] selection:text-black">
      {/* Fondo futurista animado */}
      <CyberBackground />

      <Toaster position="bottom-right" />

      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-xl hud-panel rounded-[2rem] p-6 sm:p-8 backdrop-blur-2xl relative z-10"
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3.5">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="p-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl text-white shadow-xl cursor-pointer"
            >
              <QrCode size={28} style={{ color: fgColor }} />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  QR Generator
                </h1>
                <span 
                  className="px-2 py-0.5 text-xs font-extrabold rounded-md shadow-md"
                  style={{ backgroundColor: `${fgColor}25`, color: fgColor, border: `1px solid ${fgColor}50` }}
                >
                  DN23
                </span>
              </div>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <Cpu size={12} style={{ color: fgColor }} /> Sistema óptico avanzado
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-zinc-300">
            <Zap size={13} style={{ color: fgColor }} className="fill-current" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Input dinámico */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              URL deseado
            </label>
            <button
              type="button"
              onClick={handlePaste}
              className="text-xs hover:text-white flex items-center gap-1 transition-colors cursor-pointer font-medium text-zinc-400"
            >
              <ClipboardPaste size={13} /> Pegar enlace
            </button>
          </div>

          <div className="relative flex items-center group">
            <Link2
              className="absolute left-4 text-zinc-500 transition-colors"
              size={18}
            />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https:..."
              className="w-full pl-12 pr-10 py-3.5 bg-black/50 border border-zinc-700/70 rounded-2xl text-white placeholder-zinc-600 focus:outline-none backdrop-blur-md transition-all text-sm"
              style={{
                borderColor: undefined,
              }}
            />
            <AnimatePresence>
              {url && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  onClick={() => setUrl('')}
                  className="absolute right-3 p-1 text-zinc-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title="Limpiar enlace"
                >
                  <X size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Selector de Patrones de Color Mejorados */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Palette size={13} /> Patrones de Color Estilizados
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">
              6 Temas Disponibles
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {colorPresets.map((preset) => {
              const isSelected = fgColor === preset.fg && bgColor === preset.bg;
              return (
                <motion.button
                  key={preset.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setFgColor(preset.fg);
                    setBgColor(preset.bg);
                  }}
                  className={`relative p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer overflow-hidden backdrop-blur-xl ${
                    isSelected
                      ? 'bg-gradient-to-br from-white/[0.08] to-transparent shadow-lg'
                      : 'bg-black/40 hover:bg-black/60 border-white/5 text-zinc-400 hover:border-white/15'
                  }`}
                  style={{
                    borderColor: isSelected ? preset.fg : undefined,
                    boxShadow: isSelected ? `0 0 20px ${preset.borderGlow}` : undefined,
                  }}
                >
                  {/* Punto indicador activo */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full shadow-md"
                      style={{
                        backgroundColor: preset.fg,
                        boxShadow: `0 0 10px ${preset.fg}`,
                      }}
                    />
                  )}

                  {/* Vista previa miniatura de los colores */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-lg border border-white/20 shadow-inner flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: preset.bg }}
                    >
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: preset.fg }}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Tema
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold truncate w-full ${
                      isSelected ? 'text-white font-bold' : 'text-zinc-300'
                    }`}
                  >
                    {preset.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Vista Previa del QR Mejorada */}
        <div className="flex justify-center mb-8" ref={qrRef}>
          <QrPreview url={url} fgColor={fgColor} bgColor={bgColor} />
        </div>

        {/* Botones de Acción */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => downloadQr('qr_generator_DN23.png')}
            disabled={!url.trim()}
            className="shimmer-btn flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-zinc-800 to-zinc-900 text-white shadow-xl border border-white/10 transition-all cursor-pointer disabled:opacity-40 hover:border-white/30"
          >
            <Download size={18} style={{ color: fgColor }} />
            Descargar PNG
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={copyQrToClipboard}
            disabled={!url.trim()}
            className="shimmer-btn flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm text-black shadow-xl border border-white/20 transition-all cursor-pointer disabled:opacity-40"
            style={{
              background: `linear-gradient(135deg, ${fgColor}, #ffffff)`,
            }}
          >
            <Copy size={18} />
            Copiar Imagen
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}