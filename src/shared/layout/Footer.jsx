import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const CONFIG = {
  colors: {
    blue: '#0E2244',
    yellow: '#E2E000',
    white: '#FFFFFF'
  },
  columns: [
    {
      title: "Programas",
      links: ["Bachillerato", "Técnicos Laborales", "Diplomados", "Cursos Cortos"]
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

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0E2244] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PARTE SUPERIOR: MARCA Y NAVEGACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* COLUMNA 1: LOGO Y FRASE */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">
              Tu<span className="text-[#E2E000]">Logo</span>
            </h2>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs">
              Transformando vidas a través de la educación virtual de alta calidad. Tu futuro empieza hoy.
            </p>
            <div className="flex gap-4">
              <SocialCircle Icon={Facebook} />
              <SocialCircle Icon={Instagram} />
              <SocialCircle Icon={Linkedin} />
            </div>
          </div>

          {/* COLUMNAS 2 Y 3: LINKS (Usando el mapa de CONFIG) */}
          {CONFIG.columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-[#E2E000] text-[10px] font-black uppercase tracking-[0.3em]">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium text-white/70 hover:text-[#E2E000] transition-colors flex items-center gap-2 group">
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: CONTACTO */}
          <div className="space-y-6">
            <h4 className="text-[#E2E000] text-[10px] font-black uppercase tracking-[0.3em]">
              Contacto Directo
            </h4>
            <ul className="space-y-4">
              <ContactItem Icon={Phone} text={CONFIG.contact.phone} />
              <ContactItem Icon={Mail} text={CONFIG.contact.email} />
              <ContactItem Icon={MapPin} text={CONFIG.contact.address} />
            </ul>
          </div>
        </div>

        {/* DIVIDER PERSONALIZADO */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200/10 to-transparent mb-10"></div>

        {/* PARTE INFERIOR: LEGAL Y BOTÓN TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-blue-200/30 uppercase tracking-widest text-center md:text-left">
            © 2024 Tu Institución Educativa. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:text-[#E2E000] transition-all"
          >
            Volver al inicio
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E2E000] transition-all">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>

      {/* ELEMENTO DECORATIVO DE FONDO */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#E2E000] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

// COMPONENTES DE APOYO
const SocialCircle = ({ Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#E2E000] hover:text-[#0E2244] hover:border-[#E2E000] transition-all">
    <Icon size={18} />
  </a>
);

const ContactItem = ({ Icon, text }) => (
  <li className="flex items-center gap-3 text-sm text-white/70">
    <Icon size={16} className="text-[#E2E000]" />
    <span>{text}</span>
  </li>
);

export default Footer;