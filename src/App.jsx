import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About'; // Aquí importamos la nueva sección
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] font-sans text-slate-100">
      <Navbar />
      
      <main>
        {/* 1. Inicio */}
        <section id="inicio">
          <Hero />
        </section>

        {/* 2. Acerca de mi */}
        <About />

        {/* 3. Mi Stack */}
        <section id="stack">
          <TechStack />
        </section>

        {/* 4. Mis Proyectos */}
        <section id="proyectos" className="bg-slate-950/30">
          <Projects />
        </section>
      </main>

      {/* 5. Contacto */}
      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}