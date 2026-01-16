import React, { useState } from 'react';
import { 
  CheckCircle, Menu, X, Star, Users, Briefcase, 
  Monitor, Calculator, HeartPulse, GraduationCap, 
  ArrowRight, MessageCircle 
} from 'lucide-react';
import Hero from '../shared/components/Hero';
import Header from '../shared/layout/Header';
import HighSchoolValidation from '../shared/components/HighSchoolValidation';
import LaboralTechnicians from '../shared/components/TecnicosLaborales';
import CoursesSection from '../shared/components/CursosYDiplomados';
import Testimonials from '../shared/components/Testimonios';
import Footer from '../shared/layout/Footer';

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
      <Header></Header>

      {/* HERO SECTION */}
      <Hero></Hero>

      {/* SECCIÓN: VALIDACIÓN DE BACHILLERATO */}
      <HighSchoolValidation></HighSchoolValidation>

      {/* SECCIÓN: TÉCNICOS LABORALES (Items Individuales) */}
      <LaboralTechnicians></LaboralTechnicians>

      {/* SECCIÓN: CURSOS (Estética diferente: Cards horizontales) */}
      <CoursesSection></CoursesSection>

      {/* SECCIÓN: TESTIMONIOS */}
      <Testimonials></Testimonials>

      {/* FOOTER */}
     <Footer></Footer>
    </div>
  );
};

export default KlicusLanding;