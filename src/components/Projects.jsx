import { projects } from '../data/portfolioData';

export function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4">
        Mis <span className="text-emerald-400">Proyectos</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group"
          >
            {/* Cabecera: Icono y Etiqueta (Producción / Código Abierto) */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
                💻
              </div>
              {project.isPrivate ? (
                <span className="text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  En Producción 🚀
                </span>
              ) : (
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                  Código Abierto
                </span>
              )}
            </div>

            {/* Títulos: Jerarquía Visual Invertida */}
            <div className="mb-4">
              {/* Título Técnico Gigante y Llamativo */}
              <h3 className="text-xl font-extrabold text-slate-100 mb-1 leading-tight">
                {project.technicalTitle}
              </h3>
              {/* Nombre de la marca o proyecto en un color secundario */}
              <p className="text-sm font-medium text-emerald-400/80 uppercase tracking-wider">
                {project.brandName}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tecnologías (Tags) */}
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.techStack.map((tech, index) => (
                <span key={index} className="text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* Botones de enlace */}
            <div className="pt-5 border-t border-slate-800/80 flex gap-4">
              {!project.isPrivate && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm font-bold transition-colors flex items-center gap-1">
                  GitHub ↗
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm font-bold transition-colors flex items-center gap-1">
                  Visitar ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}