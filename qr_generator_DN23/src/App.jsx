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
  Sparkles,
} from 'lucide-react';
import { QrPreview } from './components/QrPreview';
import { CyberBackground } from './components/CyberBackground';
import { useQrActions } from './hooks/useQrActions';

export default function App() {
  const [url, setUrl] = useState('https://github.com');
  const [fgColor, setFgColor] = useState('#00E5FF');
  const [bgColor, setBgColor] = useState('#070B14');
  const qrRef = useRef(null);

  const { downloadQr, copyQrToClipboard } = useQrActions(qrRef);

  // Ampliación a 6 acabados metálicos con gradientes de textura
  const colorPresets = [
    {
      name: 'Cian Neón',
      fg: '#00E5FF',
      bg: '#070B14',
      borderGlow: 'rgba(0, 229, 255, 0.4)',
      accent: 'text-[#00E5FF]',
    },
    {
      name: 'Azul Eléctrico',
      fg: '#007BFF',
      bg: '#040711',
      borderGlow: 'rgba(0, 123, 255, 0.4)',
      accent: 'text-[#007BFF]',
    },
    {
      name: 'Voltaje Oro',
      fg: '#FACC15',
      bg: '#090805',
      borderGlow: 'rgba(250, 204, 21, 0.4)',
      accent: 'text-[#FACC15]',
    },
    {
      name: 'Titanio Oscuro',
      fg: '#E4E4E7',
      bg: '#18181B',
      borderGlow: 'rgba(228, 228, 231, 0.3)',
      accent: 'text-zinc-200',
    },
    {
      name: 'Cromo Ártico',
      fg: '#38BDF8',
      bg: '#0B132B',
      borderGlow: 'rgba(56, 189, 248, 0.4)',
      accent: 'text-[#38BDF8]',
    },
    {
      name: 'Magma Solar',
      fg: '#FB923C',
      bg: '#110704',
      borderGlow: 'rgba(251, 146, 60, 0.4)',
      accent: 'text-[#FB923C]',
    },
  ];

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        toast.success('Enlace pegado desde el portapapeles', {
          style: { background: '#09090b', color: '#00e5ff', border: '1px solid #007bff' },
        });
      }
    } catch {
      toast.error('Permiso denegado para leer el portapapeles');
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 sm:p-6 relative selection:bg-[#00E5FF] selection:text-black">
      {/* Fondo futurista animado */}
      <CyberBackground />

      <Toaster position="bottom-right" />

      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-xl hud-panel rounded-3xl p-6 sm:p-8 backdrop-blur-2xl relative z-10"
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3.5">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="p-3 bg-gradient-to-br from-[#007BFF]/30 to-[#00E5FF]/10 border border-[#00E5FF]/50 rounded-2xl text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.25)] cursor-pointer"
            >
              <QrCode size={28} />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  QR Generator
                </h1>
                <span className="px-2 py-0.5 text-xs font-extrabold bg-[#FACC15]/15 text-[#FACC15] border border-[#FACC15]/40 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                  DN23
                </span>
              </div>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <Cpu size={12} className="text-[#00E5FF]" /> Sistema óptico instantáneo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#FACC15]">
            <Zap size={13} className="fill-[#FACC15]" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Input dinámico con botones de Pegar y Limpiar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              URL de Destino
            </label>
            <button
              type="button"
              onClick={handlePaste}
              className="text-xs text-[#00E5FF] hover:text-[#FACC15] flex items-center gap-1 transition-colors cursor-pointer font-medium"
            >
              <ClipboardPaste size={13} /> Pegar enlace
            </button>
          </div>

          <div className="relative flex items-center group">
            <Link2
              className="absolute left-4 text-zinc-500 group-focus-within:text-[#00E5FF] transition-colors"
              size={18}
            />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://introduce-tu-enlace.com"
              className="w-full pl-12 pr-10 py-3.5 bg-black/50 border border-zinc-700/70 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] backdrop-blur-md transition-all text-sm"
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

        {/* Selector de Acabados Metálicos Mejorado Visualmente */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Aleación & Acabado Metálico
            </span>
            <span className="text-[10px] text-zinc-500 flex items-center gap-1">
              <Sparkles size={11} className="text-[#FACC15]" /> 6 Patrones Disponibles
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
                  {/* Luz de estado activa en la esquina superior derecha */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full shadow-md"
                      style={{
                        backgroundColor: preset.fg,
                        boxShadow: `0 0 8px ${preset.fg}`,
                      }}
                    />
                  )}

                  {/* Vista previa de textura dual en miniatura */}
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                      Metals
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

        {/* Vista Previa del QR */}
        <div className="flex justify-center mb-8" ref={qrRef}>
          <QrPreview url={url} fgColor={fgColor} bgColor={bgColor} />
        </div>

        {/* Botones de Acción con efecto brillo metálico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => downloadQr('qr_generator_DN23.png')}
            disabled={!url.trim()}
            className="shimmer-btn flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#007BFF] via-[#0066d6] to-[#004c9e] text-white shadow-[0_0_25px_rgba(0,123,255,0.4)] border border-[#00E5FF]/40 transition-all cursor-pointer disabled:opacity-40"
          >
            <Download size={18} className="text-[#00E5FF]" />
            Descargar PNG
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={copyQrToClipboard}
            disabled={!url.trim()}
            className="shimmer-btn flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#FACC15] via-[#eab308] to-[#ca8a04] text-black shadow-[0_0_25px_rgba(250,204,21,0.3)] border border-yellow-200/50 transition-all cursor-pointer disabled:opacity-40"
          >
            <Copy size={18} />
            Copiar Imagen
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}