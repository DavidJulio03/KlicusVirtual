import React from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import CONFIG from '../data/TestimoniosData'

const Testimonials = () => {
  return (
    <section id={CONFIG.sectionId} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO CON COLORES CORREGIDOS */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[#0E2244] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            {CONFIG.header.tag}
          </span>
          <h2 className="text-4xl lg:text-7xl font-black text-[#0E2244] uppercase italic leading-none mb-6">
            {CONFIG.header.title} <br />
            {CONFIG.header.titleAccent}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm lg:text-base font-medium">
            {CONFIG.header.subtitle}
          </p>
        </div>

        {/* GRILLA DE TESTIMONIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CONFIG.reviews.map((review) => (
            <div 
              key={review.id}
              className="group relative bg-[#F8FAFC] p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2"
            >
              <div className="absolute top-8 right-8 text-[#E2E000] opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#E2E000] text-[#E2E000]" />
                ))}
              </div>

              <p className="text-slate-600 font-medium italic leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#0E2244] font-black text-sm uppercase">{review.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS INFERIORES */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-100">
          <div className="text-center">
            <p className="text-3xl lg:text-5xl font-black text-[#0E2244] italic mb-1">15k+</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Estudiantes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-5xl font-black text-[#0E2244] italic mb-1">95%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Satisfacción</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-5xl font-black text-[#0E2244] italic mb-1">40+</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Programas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-5xl font-black text-[#0E2244] italic mb-1">100%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Virtual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;