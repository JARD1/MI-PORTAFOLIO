import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function TechStack() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t('stack.cat1Title'),
      icon: "⚙️",
      description: t('stack.cat1Desc'),
      techs: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }, // Movido aquí
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      ]
    },
    {
      title: t('stack.cat2Title'),
      icon: "🎨",
      description: t('stack.cat2Desc'),
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", needsWhiteBg: true },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" },
      ]
    },
    {
      title: t('stack.cat3Title'),
      icon: "☁️",
      description: t('stack.cat3Desc'),
      techs: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", needsWhiteBg: true },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", needsWhiteBg: true },
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-[#030610] relative overflow-hidden border-t border-slate-900">
      
      {/* Resplandor de fondo sutil */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 inline-block border-b-2 border-emerald-500 pb-4">
            {t('stack.title')} <span className="text-emerald-400">{t('stack.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            {t('stack.subtitle')}
          </p>
        </div>

        {/* Cuadrícula de Categorías (Bento Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500 group flex flex-col relative overflow-hidden"
            >
              {/* Brillo interno en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Título de la Categoría */}
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-700 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{category.title}</h3>
              </div>
              <p className="text-base text-slate-400 mb-8 flex-grow relative z-10">{category.description}</p>

              {/* Contenedor flexible para las tecnologías */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex flex-1 min-w-[90px] flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/80 hover:bg-slate-800 hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/item"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className={`w-10 h-10 object-contain mb-3 group-hover/item:scale-110 transition-transform duration-300 ${tech.needsWhiteBg ? 'bg-slate-200 rounded-full p-1.5' : ''}`} 
                    />
                    <span className="text-xs font-bold text-slate-300 text-center tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}