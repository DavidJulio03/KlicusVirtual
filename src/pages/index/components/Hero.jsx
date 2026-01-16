import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import CONFIG from '../data/HeroData'

// Pasamos 'logo' como prop al componente
const Hero = ({ logo }) => {
  const { colors, content, stats, visual, badge } = CONFIG;

  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:py-20 overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      <BackgroundDecor colors={colors} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md p-1 pr-4 rounded-full border border-white/20 mb-6">
            <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: colors.accent }}>
              <badge.icon size={12} className="text-blue-900" />
            </span>
            <span className="text-[10px] lg:text-xs font-bold text-white tracking-widest uppercase italic">
              {badge.text}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6 italic">
            {content.titleTop} <br className="hidden sm:block" />
            <span className="relative inline-block">
              {content.titleMain}
              <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 -z-10" style={{ backgroundColor: colors.accent }}></span>
            </span>
          </h1>

          <p className="text-base lg:text-xl text-blue-100/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            {content.description}
          </p>

          <div className="flex justify-center lg:justify-start">
            <button 
              className="group relative px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-base lg:text-lg transition-all shadow-2xl active:scale-95 flex items-center gap-3" 
              style={{ backgroundColor: colors.accent, color: colors.primary }}
            >
              {content.cta} 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl lg:text-3xl font-black text-white italic">{stat.value}</p>
                <p className="text-[9px] lg:text-xs text-blue-200 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: VISUAL (LOGO O BRAND) */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center py-10 lg:py-0">
          
          <div className="relative z-20 bg-gradient-to-br from-white to-gray-200 p-0.5 rounded-[2.5rem] shadow-2xl transform rotate-3 lg:-rotate-6 scale-90 sm:scale-100">
            <div className="bg-white rounded-[2.4rem] p-10 lg:p-16 flex flex-col items-center justify-center min-w-[280px] min-h-[220px]">
              
              {/* LÓGICA CONDICIONAL PARA EL LOGO */}
              {logo ? (
                <div className="flex items-center justify-center mb-6">
                  {typeof logo === 'string' ? (
                    <img src={logo} alt="Logo Institución" className="max-h-24 lg:max-h-32 object-contain" />
                  ) : (
                    <div className="scale-125 lg:scale-150">{logo}</div>
                  )}
                </div>
              ) : (
                <div className="mb-4 flex flex-col items-center italic">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter uppercase" style={{ color: colors.primary }}>
                    {visual.brandName}
                  </span>
                  <span className="text-xl font-light -mt-2" style={{ color: colors.primary }}>
                    {visual.brandDot}
                  </span>
                </div>
              )}

              <div className="w-16 h-1.5 rounded-full mb-6" style={{ backgroundColor: colors.accent }}></div>
              <p className="text-gray-400 font-bold text-center uppercase tracking-tighter text-[10px]">
                {visual.slogan}
              </p>
            </div>

            {/* Badge de Aval */}
            <div className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100">
              <div className="bg-blue-900 p-2 rounded-xl text-yellow-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Avalado por</p>
                <p className="font-black text-sm text-blue-900 leading-tight">{visual.approval}</p>
              </div>
            </div>
          </div>

          <div className="absolute z-10 w-[110%] h-[110%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
        </div>

      </div>
    </section>
  );
};

const BackgroundDecor = ({ colors }) => (
  <>
    <div 
      className="absolute inset-0 opacity-[0.05] pointer-events-none" 
      style={{ 
        backgroundImage: `linear-gradient(${colors.accent} 1px, transparent 1px), linear-gradient(90deg, ${colors.accent} 1px, transparent 1px)`, 
        backgroundSize: '50px 50px' 
      }}
    />
    <div 
      className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" 
      style={{ backgroundColor: colors.accent }}
    />
  </>
);

export default Hero;