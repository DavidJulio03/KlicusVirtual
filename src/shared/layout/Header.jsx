import React, { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight } from 'lucide-react';

// ==========================================
// CONFIGURACIÓN DE DATOS (Modificable)
// ==========================================
const CONFIG = {
  brand: { name: 'klicus', suffix: '.com' },
  colors: {
    blue: '#0E2244',
    yellow: '#E2E000',
    white: '#FFFFFF',
  },
  navLinks: [
    { name: 'Validación', href: '#validacion' },
    { name: 'Técnicos', href: '#tecnicos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Preguntas frecuentes', href: '#questions' },
  ],
  buttons: {
    primary: 'Matrícula Express',
    secondary: 'Campus Virtual',
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${
          isScrolled || isOpen
            ? 'py-4 bg-[#0E2244] shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-baseline italic relative z-[130]">
            <span className="text-2xl lg:text-3xl font-black tracking-tighter text-white">
              {CONFIG.brand.name}
            </span>
            <span className="text-sm lg:text-lg font-light ml-0.5" style={{ color: CONFIG.colors.yellow }}>
              {CONFIG.brand.suffix}
            </span>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-bold uppercase tracking-widest text-white/80 hover:text-[#E2E000] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ACCIONES DESKTOP - MODIFICADO AQUÍ */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Botón Secondary (Campus Virtual) */}
            <button className="flex items-center gap-2 text-white text-[12px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              <User size={16} style={{ color: CONFIG.colors.yellow }} />
              {CONFIG.buttons.secondary}
            </button>

            {/* Botón Primary (Matrícula) */}
            <button className="px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter transition-all hover:brightness-110 active:scale-95 shadow-lg"
                    style={{ backgroundColor: CONFIG.colors.yellow, color: CONFIG.colors.blue }}>
              {CONFIG.buttons.primary}
            </button>
          </div>

          {/* BOTÓN MÓVIL */}
          <button 
            className="lg:hidden relative z-[130] w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <div 
        className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ backgroundColor: CONFIG.colors.blue }}
      >
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#E2E000] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="h-full flex flex-col justify-between pt-32 pb-12 px-8">
          <div className="flex flex-col gap-6">
            {CONFIG.navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between group transition-all duration-500 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl font-black text-white group-active:text-[#E2E000]">
                  {link.name}
                </span>
                <ArrowRight size={24} className="text-[#E2E000] opacity-0 group-active:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              className="w-full py-5 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
              style={{ backgroundColor: CONFIG.colors.yellow, color: CONFIG.colors.blue }}
            >
              {CONFIG.buttons.primary}
            </button>
            <button className="w-full py-5 rounded-2xl border-2 border-white/10 text-white font-black text-lg flex items-center justify-center gap-3 bg-white/5 active:bg-white/10 transition-colors">
              <User size={20} style={{ color: CONFIG.colors.yellow }} />
              {CONFIG.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;