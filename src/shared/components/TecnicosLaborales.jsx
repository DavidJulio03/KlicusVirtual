import React, { useRef } from 'react';
import { ArrowRight, Clock, Briefcase, Users, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const CONFIG = {
  sectionId: "tecnicos",
  colors: { blue: '#0E2244', yellow: '#E2E000' },
  header: {
    tag: "Formación para el trabajo",
    title: "Programas Técnicos",
    subtitle: "Carreras cortas con alta demanda laboral para que empieces a trabajar rápido."
  },
  programs: [
    { id: 1, name: "Técnico en Sistemas", modality: "100% Virtual", duration: "3 Semestres", focus: "Soporte y Redes", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Auxiliar Administrativo", modality: "100% Virtual", duration: "3 Semestres", focus: "Gestión Empresarial", image: "https://universae.com/wp-content/uploads/2023/09/min-auxiliar-administrativo-funciones.webp" },
    { id: 3, name: "Seguridad Ocupacional", modality: "100% Virtual", duration: "3 Semestres", focus: "SST y Prevención", image: "https://ecuador.unir.net/wp-content/uploads/sites/8/2024/08/Cuales-son-las-funciones-del-tecnico-de-seguridad-y-salud-ocupacional2.jpg" },
    { id: 4, name: "Contabilidad", modality: "Virtual", duration: "3 Sem", focus: "Finanzas", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" }
  ]
};

const LaboralTechnicians = () => {
  const scrollRef = useRef(null);
  const visiblePrograms = CONFIG.programs.slice(0, 3);
  const hasMore = CONFIG.programs.length > 3;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Ajustamos el scroll para que avance una "tarjeta" aproximadamente
      const scrollAmount = clientWidth * 0.8; 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id={CONFIG.sectionId} className="py-20 bg-[#f5f5f5] overflow-hidden">
      {/* ESTILO PARA OCULTAR SCROLLBAR */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-10 h-1 bg-[#E2E000]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0E2244]/50">{CONFIG.header.tag}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0E2244] uppercase italic leading-tight">
              {CONFIG.header.title} <br />
              <span className="text-slate-400 not-italic font-light text-3xl lg:text-5xl">Laborales</span>
            </h2>
          </div>

          {/* BOTONES DE NAVEGACIÓN */}
          <div className="hidden lg:flex gap-4 mb-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#0E2244] hover:bg-[#0E2244] hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-14 h-14 rounded-full bg-[#E2E000] flex items-center justify-center text-[#0E2244] hover:bg-[#0E2244] hover:text-white transition-all shadow-lg active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* SLIDER CON CLASE NO-SCROLLBAR */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {visiblePrograms.map((program) => (
            <div 
              key={program.id}
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-1.35rem)] snap-center bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 group hover:shadow-[0_40px_80px_-20px_rgba(14,34,68,0.15)] transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={program.image} alt={program.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#E2E000] text-[#0E2244] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">{program.modality}</span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={16} className="text-[#E2E000]" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{program.focus}</span>
                </div>
                <h3 className="text-2xl font-black text-[#0E2244] mb-6 leading-tight group-hover:text-[#E2E000] transition-colors line-clamp-1">{program.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-50 mb-8">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={14} className="text-[#E2E000]" />
                    <span className="text-xs font-bold text-[#0E2244]">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={14} className="text-[#E2E000]" />
                    <span className="text-xs font-bold text-[#0E2244]">Cupos limitados</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-between group/btn">
                  <span className="text-sm font-black text-[#0E2244] uppercase tracking-widest">Ver programa</span>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-[#E2E000] transition-all">
                    <ArrowRight size={20} className="text-[#0E2244]" />
                  </div>
                </button>
              </div>
            </div>
          ))}

          {/* TARJETA VER MÁS */}
          {hasMore && (
            <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-1.35rem)] snap-center bg-[#0E2244] rounded-[2.5rem] flex flex-col items-center justify-center p-10 text-center group cursor-pointer border border-white/5 transition-all">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#E2E000]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plus size={32} className="text-[#E2E000]" />
              </div>
              <h4 className="text-white font-black text-2xl uppercase italic mb-2">Ver Catálogo <br/> Completo</h4>
              <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest mb-8">+{CONFIG.programs.length - 3} Programas más</p>
              <div className="flex items-center gap-3 text-[#E2E000] font-black text-xs uppercase tracking-widest">
                Explorar Ahora <ArrowRight size={18} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LaboralTechnicians;