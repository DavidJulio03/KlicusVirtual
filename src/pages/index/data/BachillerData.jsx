import { Shield, Laptop, Zap } from 'lucide-react';

const CONFIG = {
  sectionId: "validacion",
  colors: {
    blue: '#0E2244',
    yellow: '#E2E000',
    softGray: '#F1F5F9'
  },
  content: {
    tag: "Resolución oficial",
    title: "Bachillerato",
    titleAccent: "en tiempo récord",
    description: "Diseñado para quienes trabajan. Nuestra metodología por ciclos permite graduarte legalmente en la mitad del tiempo tradicional.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  features: [
    { title: "Legal", desc: "Título del MEN", icon: <Shield size={18} /> },
    { title: "Ágil", desc: "2 grados en 1 año", icon: <Zap size={18} /> },
    { title: "24/7", desc: "Plataforma total", icon: <Laptop size={18} /> }
  ]
}

export default CONFIG