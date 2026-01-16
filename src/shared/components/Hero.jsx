import React from 'react';
import { Play, Sparkles, ShieldCheck, ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const colors = {
    blue: '#0E2244',
    yellow: '#E2E000',
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:py-20 overflow-hidden" style={{ backgroundColor: colors.blue }}>
      {/* Background Decorativo - Optimizado para no sobrecargar el renderizado móvil */}
      <div className="absolute inset-0 opacity-[0.05] lg:opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${colors.yellow} 1px, transparent 1px), linear-gradient(90deg, ${colors.yellow} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}>
      </div>

      {/* Luces de fondo ajustadas para móvil */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-[80px] lg:blur-[120px] opacity-20" style={{ backgroundColor: colors.yellow }}></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* COLUMNA: CONTENIDO (En móvil aparece primero o segundo según desees, aquí va primero) */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md p-1 pr-4 rounded-full border border-white/20 mb-6 lg:mb-8">
            <span className="flex h-5 w-5 lg:h-6 lg:w-6 items-center justify-center rounded-full" style={{ backgroundColor: colors.yellow }}>
              <Sparkles size={12} className="text-blue-900" />
            </span>
            <span className="text-[10px] lg:text-xs font-bold text-white tracking-widest uppercase">Inscripciones 2026 Abiertas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6">
            ESTUDIA <br className="hidden sm:block" />
            <span className="relative inline-block">
              SIN LÍMITES
              <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 -z-10" style={{ backgroundColor: colors.yellow }}></span>
            </span>
          </h1>

          <p className="text-base lg:text-xl text-blue-100/80 mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            En <span className="font-bold text-white italic">klicus.com</span> transformamos tu realidad con educación técnica y bachillerato 100% digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-base lg:text-lg transition-all overflow-hidden shadow-2xl active:scale-95" 
              style={{ backgroundColor: colors.yellow, color: colors.blue }}>
              <span className="relative z-10 flex items-center justify-center gap-3">
                EMPEZAR AHORA <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* Stats: Ocultos en móviles muy pequeños o en scroll horizontal */}
          <div className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl lg:text-3xl font-black text-white">+15k</p>
              <p className="text-[9px] lg:text-xs text-blue-200 uppercase tracking-widest font-bold">Egresados</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-black text-white">24/7</p>
              <p className="text-[9px] lg:text-xs text-blue-200 uppercase tracking-widest font-bold">Acceso</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-black text-white">Legal</p>
              <p className="text-[9px] lg:text-xs text-blue-200 uppercase tracking-widest font-bold">Avalado</p>
            </div>
          </div>
        </div>

        {/* COLUMNA: VISUAL (Optimización de tamaño para Tablet/Móvil) */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center py-10 lg:py-0">
          <div className="relative z-20 bg-gradient-to-br from-white to-gray-200 p-0.5 lg:p-1 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl transform rotate-3 lg:-rotate-6 scale-90 sm:scale-100">
            <div className="bg-white rounded-[2.4rem] lg:rounded-[2.8rem] p-8 lg:p-16 flex flex-col items-center">
              <div className="mb-4 lg:mb-6 flex flex-col items-center italic">
                <span className="text-5xl lg:text-7xl font-black tracking-tighter" style={{ color: colors.blue }}>klicus</span>
                <span className="text-base lg:text-xl font-light -mt-2" style={{ color: colors.blue }}>.com</span>
              </div>
              <div className="w-16 lg:w-24 h-1.5 lg:h-2 rounded-full mb-6 lg:mb-8" style={{ backgroundColor: colors.yellow }}></div>
              <p className="text-gray-400 font-bold text-center uppercase tracking-tighter text-[10px] lg:text-xs">Knowledge & Liberty</p>
            </div>

            {/* Badges: Ajustados para no salirse de la pantalla en móvil */}
            <div className="absolute -top-6 -right-4 lg:-top-10 lg:-right-10 bg-white p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-2xl flex items-center gap-3 lg:gap-4 border border-gray-100 scale-90 lg:scale-100">
              <div className="bg-blue-900 p-2 lg:p-3 rounded-lg lg:rounded-xl text-yellow-400">
                <ShieldCheck size={20} lg={28} />
              </div>
              <div>
                <p className="text-[9px] lg:text-xs text-gray-400 font-bold uppercase">Avalado</p>
                <p className="font-black text-xs lg:text-base text-blue-900 leading-tight">MEN Colombia</p>
              </div>
            </div>

            {/* Puntero de Klic: Solo visible en Desktop para evitar ruido visual en móvil */}
            <div className="hidden lg:block absolute top-20 left-0 z-30 animate-pulse">
              <MousePointer2 className="text-white fill-white shadow-lg" size={40} />
            </div>
          </div>

          {/* Círculos decorativos reducidos en móvil para rendimiento */}
          <div className="absolute z-10 w-[110%] h-[110%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;