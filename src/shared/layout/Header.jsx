import React, { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight } from 'lucide-react';

// ==========================================
// CONFIGURACIÓN CENTRALIZADA
// ==========================================
const CONFIG = {
  brand: { 
    name: 'klicus', 
    suffix: '.com' 
  },
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

const Header = ({ logo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control del scroll del cuerpo al abrir menú
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
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
          
          {/* LOGO DINÁMICO */}
          <div className="relative z-[130]">
            {logo ? (
              <a href="/" className="block">
                {typeof logo === 'string' ? (
                  <img src={logo} alt="Logo" className="h-8 lg:h-10 w-auto object-contain" />
                ) : (
                  <div className="h-8 lg:h-10 flex items-center">{logo}</div>
                )}
              </a>
            ) : (
              <div className="flex items-baseline italic">
                <span className="text-2xl lg:text-3xl font-black tracking-tighter text-white uppercase">
                  {CONFIG.brand.name}
                </span>
                <span className="text-sm lg:text-lg font-light ml-0.5" style={{ color: CONFIG.colors.yellow }}>
                  {CONFIG.brand.suffix}
                </span>
              </div>
            )}
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-[#E2E000] transition-colors italic"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ACCIONES DESKTOP */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-2 text-white text-[11px] font-black uppercase tracking-widest hover:text-[#E2E000] transition-all group">
              <User size={16} style={{ color: CONFIG.colors.yellow }} className="group-hover:scale-110 transition-transform" />
              {CONFIG.buttons.secondary}
            </button>

            <button 
              className="px-7 py-3 rounded-xl font-black text-[11px] uppercase tracking-tighter transition-all hover:brightness-110 active:scale-95 shadow-xl italic"
              style={{ backgroundColor: CONFIG.colors.yellow, color: CONFIG.colors.blue }}
            >
              {CONFIG.buttons.primary}
            </button>
          </div>

          {/* BOTÓN MÓVIL */}
          <button 
            className="lg:hidden relative z-[130] w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (Full Screen) */}
      <div 
        className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ backgroundColor: CONFIG.colors.blue }}
      >
        {/* Decoración de fondo en menú */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E2E000]/10 to-transparent pointer-events-none"></div>
        
        <div className="h-full flex flex-col justify-between pt-32 pb-12 px-8 relative z-20">
          <div className="flex flex-col gap-8">
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
                <span className="text-4xl font-black text-white uppercase italic group-active:text-[#E2E000]">
                  {link.name}
                </span>
                <ArrowRight size={28} className="text-[#E2E000]" />
              </a>
            ))}
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              className="w-full py-5 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform uppercase italic"
              style={{ backgroundColor: CONFIG.colors.yellow, color: CONFIG.colors.blue }}
            >
              {CONFIG.buttons.primary}
            </button>
            <button className="w-full py-5 rounded-2xl border border-white/20 text-white font-black text-lg flex items-center justify-center gap-3 bg-white/5 active:bg-white/10 transition-colors uppercase italic">
              <User size={22} style={{ color: CONFIG.colors.yellow }} />
              {CONFIG.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;