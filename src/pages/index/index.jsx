import React, { useState } from 'react';
import { 
  CheckCircle, Menu, X, Star, Users, Briefcase, 
  Monitor, Calculator, HeartPulse, GraduationCap, 
  ArrowRight, MessageCircle 
} from 'lucide-react';
import Hero from './components/Hero';
import Header from '../../shared/layout/Header';
import Bachiller from './components/Bachiller';
import LaboralTechnicians from './components/Tecnicos';
import CoursesSection from './components/Cursos';
import Testimonials from './components/Testimonios';
import Footer from '../../shared/layout/Footer';

const KlicusLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Paleta oficial Klicus
  const colors = {
    blue: '#0E2244', // Pantone 533 CP [cite: 8, 13]
    yellow: '#E2E000', // Pantone 396 C [cite: 6, 10]
    gray: '#f9f9f9'
  };

  const WhatsAppFloat = () => (
    <a href="https://wa.me/123456789" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition flex items-center justify-center">
        <MessageCircle size={32} fill="white" />
    </a>
  );

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#E2E000] selection:text-[#0E2244]">

      {/* NAVEGACIÓN */}
      <Header logo={"/KlicusVirtual/klicuslogo.png"}></Header>

      {/* HERO SECTION */}
      <Hero logo={"/KlicusVirtual/klicuslogo.png"}></Hero>

      {/* SECCIÓN: VALIDACIÓN DE BACHILLERATO */}
      <Bachiller></Bachiller>

      {/* SECCIÓN: TÉCNICOS LABORALES (Items Individuales) */}
      <LaboralTechnicians></LaboralTechnicians>

      {/* SECCIÓN: CURSOS (Estética diferente: Cards horizontales) */}
      <CoursesSection></CoursesSection>

      {/* SECCIÓN: TESTIMONIOS */}
      <Testimonials></Testimonials>

      {/* FOOTER */}
     <Footer logo={"/KlicusVirtual/klicuslogo.png"}></Footer>

     <WhatsAppFloat />
    </div>
  );
};

export default KlicusLanding;