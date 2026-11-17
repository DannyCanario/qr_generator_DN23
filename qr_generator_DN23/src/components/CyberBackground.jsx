import { motion } from 'framer-motion';

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040406]">
      {/* Rejilla futurista animada */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 123, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 123, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%)',
        }}
      />

      {/* Haz de luz azul eléctrico en movimiento */}
      <motion.div
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-15%', '15%', '-15%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#007BFF]/15 blur-[130px] pointer-events-none"
      />

      {/* Haz de luz amarillo voltaje en movimiento inverso */}
      <motion.div
        animate={{
          x: ['20%', '-20%', '20%'],
          y: ['15%', '-15%', '15%'],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-[#FACC15]/10 blur-[130px] pointer-events-none"
      />

      {/* Líneas de flujo horizontal (efecto datos viajando) */}
      <motion.div
        animate={{ y: ['-100vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent"
      />
      <motion.div
        animate={{ y: ['100vh', '-100vh'] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent"
      />
    </div>
  );
};