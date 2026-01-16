import React from 'react';
import { ArrowRight, Shield, Laptop, Award, Zap } from 'lucide-react';
import CONFIG from '../data/BachillerData'

const HighSchoolValidation = () => {
  return (
    <section id={CONFIG.sectionId} className="relative py-20 lg:py-32 bg-[#f5f5f5] overflow-hidden">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-32 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* BLOQUE VISUAL */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(14,34,68,0.2)]">
                <img 
                  src={CONFIG.content.image} 
                  alt="Estudiante klicus" 
                  className="w-full h-[350px] lg:h-[600px] object-cover"
                />
              </div>

              {/* Card Flotante de Confianza */}
              <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-[#0E2244] text-white p-6 lg:p-8 rounded-[2rem] shadow-2xl max-w-[200px] lg:max-w-[240px]">
                <div className="w-12 h-12 bg-[#E2E000] rounded-2xl flex items-center justify-center text-[#0E2244] mb-4">
                  <Award size={28} />
                </div>
                <p className="font-black text-sm lg:text-base leading-tight uppercase italic">
                  Garantía de <span style={{ color: CONFIG.colors.yellow }}>Grado</span>
                </p>
                <p className="text-[10px] text-blue-200/60 mt-2 font-bold uppercase tracking-widest">
                  Convenios Directos
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-40 h-40 border-[16px] border-[#E2E000] rounded-full opacity-20 -z-10"></div>
          </div>

          {/* BLOQUE DE CONTENIDO */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#E2E000] text-[#0E2244] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest">
                {CONFIG.content.tag}
              </span>
              <div className="h-px w-8 bg-slate-200"></div>
            </div>

            {/* Título mejorado: Sin gris, usando contraste de pesos en Azul */}
            <h2 className="text-4xl lg:text-7xl font-black text-[#0E2244] mb-8 leading-[1] italic uppercase">
              {CONFIG.content.title} <br />
              <span className="text-[#0E2244] not-italic font-light">
                {CONFIG.content.titleAccent.split(' ')[0]} <span style={{ color: CONFIG.colors.yellow }} className="font-black">{CONFIG.content.titleAccent.split(' ').slice(1).join(' ')}</span>
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-slate-500 font-light mb-12 leading-relaxed">
              {CONFIG.content.description}
            </p>

            {/* Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {CONFIG.features.map((f, i) => (
                <div key={i} className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[#E2E000] transition-colors">
                  <div className="text-[#0E2244] group-hover:scale-110 transition-transform">{f.icon}</div>
                  <div>
                    <h4 className="font-black text-[#0E2244] text-xs uppercase tracking-tighter">{f.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ACCIONES */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:translate-y-[-4px] active:translate-y-0 shadow-[0_20px_40px_-12px_rgba(226,224,0,0.4)]"
                style={{ backgroundColor: CONFIG.colors.yellow, color: CONFIG.colors.blue }}
              >
                Inicia tu validación
              </button>
              
              <button className="group flex items-center gap-3 text-[#0E2244] font-black text-xs uppercase tracking-widest">
                <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0E2244] group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </span>
                Requisitos de Ley
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighSchoolValidation;