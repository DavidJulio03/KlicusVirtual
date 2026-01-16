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
    </div>
  );
};

export default KlicusLanding;