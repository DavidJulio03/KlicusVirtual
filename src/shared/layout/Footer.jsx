import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const CONFIG = {
  brand: { name: 'klicus', suffix: '.com' },
  colors: {
    blue: '#0E2244',
    yellow: '#E2E000',
    white: '#FFFFFF'
  },
  columns: [
    {
      title: "Programas",
      links: ["Bachillerato", "Técnicos Laborales", "Cursos"]
    },
    {
      title: "Institución",
      links: ["Sobre Nosotros", "Preguntas Frecuentes", "Privacidad", "Términos y Condiciones"]
    }
  ],
  contact: {
    phone: "+57 (300) 123-4567",
    email: "contacto@tuinstitucion.edu.co",
    address: "Sede Principal, Colombia"
  }
};

const Footer = ({ logo }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0E2244] text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* PARTE SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* COLUMNA 1: LOGO O NOMBRE */}
          <div className="space-y-6">
            <div className="min-h-[40px] flex items-center">
              {logo ? (
                typeof logo === 'string' ? (
                  <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                ) : (
                  <div className="text-white">{logo}</div>
                )
              ) : (
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">
                  {CONFIG.brand.name}<span style={{ color: CONFIG.colors.yellow }}>{CONFIG.brand.suffix}</span>
                </h2>
              )}
            </div>
            
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs italic font-medium">
              Transformando vidas a través de la educación virtual de alta calidad. Tu futuro empieza hoy.
            </p>
            
            <div className="flex gap-4">
              <SocialCircle Icon={Facebook} />
              <SocialCircle Icon={Instagram} />
              <SocialCircle Icon={Linkedin} />
            </div>
          </div>

          {/* COLUMNAS 2 Y 3: LINKS */}
          {CONFIG.columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h4 style={{ color: CONFIG.colors.yellow }} className="text-[10px] font-black uppercase tracking-[0.3em]">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s/g, '-')}`} 
                      className="text-sm font-bold uppercase italic text-white/60 hover:text-white transition-colors flex items-center gap-2 group tracking-tight"
                    >
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" style={{ color: CONFIG.colors.yellow }} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: CONTACTO */}
          <div className="space-y-6">
            <h4 style={{ color: CONFIG.colors.yellow }} className="text-[10px] font-black uppercase tracking-[0.3em]">
              Contacto Directo
            </h4>
            <ul className="space-y-4">
              <ContactItem Icon={Phone} text={CONFIG.contact.phone} />
              <ContactItem Icon={Mail} text={CONFIG.contact.email} />
              <ContactItem Icon={MapPin} text={CONFIG.contact.address} />
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10 mb-10"></div>

        {/* PARTE INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] italic">
            © {new Date().getFullYear()} {CONFIG.brand.name}{CONFIG.brand.suffix}.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:text-[#E2E000] transition-all italic"
          >
            Volver al inicio
            <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-[#E2E000] transition-all">
              <ArrowUpRight size={16} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div 
        className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: CONFIG.colors.yellow }}
      ></div>
    </footer>
  );
};

// COMPONENTES INTERNOS
const SocialCircle = ({ Icon }) => (
  <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#E2E000] hover:text-[#0E2244] hover:border-[#E2E000] transition-all">
    <Icon size={18} />
  </a>
);

const ContactItem = ({ Icon, text }) => (
  <li className="flex items-center gap-3 text-sm text-white/60 group">
    <Icon size={16} style={{ color: CONFIG.colors.yellow }} className="group-hover:scale-110 transition-transform" />
    <span>{text}</span>
  </li>
);

export default Footer;