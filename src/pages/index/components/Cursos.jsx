import React from 'react';
import { ArrowRight, BookOpen, Star, Timer, Globe } from 'lucide-react';

import CONFIG from '../data/CursosData'

const CoursesSection = () => {
  return (
    <section id={CONFIG.sectionId} className="py-16 lg:py-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* ENCABEZADO: Ajustado con padding y tamaños fluidos */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#0E2244] font-black uppercase tracking-[0.3em] text-[9px] lg:text-[10px] mb-3 block">
              {CONFIG.header.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0E2244] uppercase italic leading-[0.9]">
              {CONFIG.header.title} <br />
              <span style={{ color: CONFIG.colors.yellow }} className="not-italic">{CONFIG.header.titleAccent}</span>
            </h2>
          </div>
          <div className="md:max-w-xs border-l-4 border-[#E2E000] pl-5">
            <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed">
              {CONFIG.header.description}
            </p>
          </div>
        </div>

        {/* GRILLA: 1 col (móvil) / 2 col (tablet) / 4 col (PC) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {CONFIG.programs.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-slate-200/50"
            >
              {/* MINIATURA: Altura fija para que todas las cards midan lo mismo */}
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0E2244] text-[#E2E000] text-[8px] font-black px-2.5 py-1 rounded-md uppercase">
                    {course.category}
                  </span>
                </div>
              </div>

              {/* CUERPO: Padding reducido en móvil */}
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E2E000] animate-pulse"></div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                    {course.status}
                  </span>
                </div>
                
                <h3 className="text-lg lg:text-xl font-black text-[#0E2244] mb-4 leading-tight flex-grow line-clamp-2 uppercase italic">
                  {course.name}
                </h3>

                {/* INFO RÁPIDA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Timer size={14} className="text-[#E2E000]" />
                    <span className="text-[11px] font-bold uppercase">{course.duration}</span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0E2244] group-hover:bg-[#0E2244] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VENTAJAS: Grid para móvil (2 columnas) */}
        <div className="mt-12 lg:mt-20 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 lg:gap-16">
          <div className="flex items-center gap-2 lg:gap-3 bg-white md:bg-transparent p-3 md:p-0 rounded-xl justify-center">
            <Globe size={18} className="text-[#E2E000]" />
            <span className="text-[9px] lg:text-[10px] font-black text-[#0E2244] uppercase">100% Virtual</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 bg-white md:bg-transparent p-3 md:p-0 rounded-xl justify-center">
            <Star size={18} className="text-[#E2E000]" />
            <span className="text-[9px] lg:text-[10px] font-black text-[#0E2244] uppercase">Expertos</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 bg-white md:bg-transparent p-3 md:p-0 rounded-xl justify-center col-span-2">
            <BookOpen size={18} className="text-[#E2E000]" />
            <span className="text-[9px] lg:text-[10px] font-black text-[#0E2244] uppercase tracking-widest text-center">Certificación Oficial</span>
          </div>
        </div>

        {/* BOTÓN VER TODOS: Full width en móvil */}
        <a href="#cursos">
          <div className="mt-12 text-center">
            <button className="w-full sm:w-auto bg-[#0E2244] text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#E2E000] hover:text-[#0E2244] transition-all active:scale-95 shadow-lg">
              Explorar catálogo completo
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;