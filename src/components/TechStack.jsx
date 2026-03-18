export function TechStack() {
  const categories = [
    {
      title: "Backend",
      icon: "⚙️",
      description: "Lógica de negocio y APIs",
      techs: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      description: "Interfaces dinámicas y robustas", // Actualicé un poco la descripción aquí
      techs: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        // Next.js también necesita el fondo blanco para resaltar en modo oscuro
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", needsWhiteBg: true },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      title: "Herramientas & BD",
      icon: "🛠️",
      description: "Persistencia y control de versiones",
      techs: [
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "DBeaver", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
        { name: "Bruno", logo: "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F436.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", needsWhiteBg: true },
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0a0f1c] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Cabecera de la sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4 text-center md:text-left">
          Mi <span className="text-emerald-400">Stack Tecnológico</span>
        </h2>

        {/* Cuadrícula de Categorías (Bento Box) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group flex flex-col"
            >
              {/* Título de la Categoría */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{category.description}</p>

              {/* Contenedor flexible para las tecnologías */}
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex flex-1 min-w-[90px] flex-col items-center justify-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/50 transition-all group/item"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className={`w-9 h-9 object-contain mb-2 group-hover/item:scale-110 transition-transform duration-300 ${tech.needsWhiteBg ? 'bg-slate-200 rounded-full p-1' : ''}`} 
                    />
                    <span className="text-xs font-semibold text-slate-300 text-center">
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