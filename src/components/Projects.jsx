import { useEffect, useState, useMemo } from 'react';
import { useScroll } from './ScrollContext';
import { useLanguage } from '../context/LanguageContext'; // Importamos el contexto de idioma
import { projects as rawProjects } from '../data/portfolioData'; // Importamos data cruda y renombramos

// --- COMPONENTE CARRUSEL ---
const ImageCarousel = ({ images, title, onExpand }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images, isHovered]);

  if (!images || images.length === 0) {
    return (
      <img 
        src="https://via.placeholder.com/1280x720/0f172a/94a3b8?text=En+Construcci%C3%B3n" 
        alt="Placeholder" 
        className="w-full h-full object-cover grayscale opacity-50"
      />
    );
  }

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-full h-full group/carousel overflow-hidden bg-slate-950 cursor-zoom-in rounded-3xl border-2 border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.6)] z-10"
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExpand(images[currentIndex])}
    >
      <img 
        src={images[currentIndex]} 
        alt={`Vista ${currentIndex + 1} de ${title}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover/carousel:scale-105"
      />
      
      <div className="absolute inset-0 bg-black/0 group-hover/carousel:bg-black/20 transition-colors duration-300" />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-700 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-700 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/50 w-2.5 hover:bg-white/80'
                }`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
// ---------------------------------------------

export function Projects() {
  const { highlightedTech, setHighlightedTech } = useScroll();
  const [expandedImage, setExpandedImage] = useState(null);
  const { t, language } = useLanguage(); // Obtenemos traductor e idioma actual

  // Fusionamos la data cruda con los textos traducidos basándonos en el ID
  // Esto es más eficiente que duplicar todo en translations.js
  const projects = useMemo(() => {
    // Obtenemos el array completo de items traducidos para el idioma actual
    // Es mejor llamar a t('projects') una vez y luego buscar dentro.
    const translatedData = t('projects');
    if (!translatedData || !translatedData.items) return rawProjects;

    return rawProjects.map(rawProject => {
      // Buscamos el item traducido que coincida con el ID
      const translatedItem = translatedData.items.find(item => item.id === rawProject.id);
      
      // Si no hay traducción (no debería pasar), devolvemos la data cruda
      if (!translatedItem) return rawProject;

      // Fusionamos: Data cruda + Textos traducidos
      return {
        ...rawProject,
        technicalTitle: translatedItem.technicalTitle,
        brandName: translatedItem.brandName,
        description: translatedItem.description
      };
    });
  }, [t, rawProjects, language]); // Re-calculamos si cambia el traductor, la data cruda o el idioma

  useEffect(() => {
    if (highlightedTech) {
      const projectWrappers = document.querySelectorAll('.project-wrapper');
      projectWrappers.forEach(wrapper => {
        wrapper.classList.remove('ring-2', 'ring-slate-700/50', 'bg-slate-900/40');
        const projectId = parseInt(wrapper.getAttribute('data-project-id'));
        const project = projects.find(p => p.id === projectId);
        if (project && project.techStack.includes(highlightedTech)) {
          wrapper.classList.add('ring-2', 'ring-slate-700/50', 'bg-slate-900/40', 'rounded-3xl');
        }
      });
      const timer = setTimeout(() => {
        setHighlightedTech(null);
        projectWrappers.forEach(wrapper => {
          wrapper.classList.remove('ring-2', 'ring-slate-700/50', 'bg-slate-900/40', 'rounded-3xl');
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedTech, setHighlightedTech, projects]); // Agregamos projects como dependencia

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setExpandedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="projects" className="bg-[#030610] py-32 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 inline-block border-b-2 border-slate-700 pb-4">
              {t('projects.title')} <span className="text-slate-400">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl text-lg">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col gap-40"> 
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={project.id} 
                  data-project-id={project.id}
                  className={`project-wrapper relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center transition-all duration-500 p-4 lg:p-8 -mx-4 lg:-mx-8`}
                >
                  
                  {/* --- AURA DE COLOR DINÁMICO --- */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[140px] pointer-events-none rounded-[100%] opacity-40 ${project.theme.glow}`} />

                  {/* --- LADO DEL TEXTO --- */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-10">
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${project.theme.bgBadge} ${project.theme.border}`}>
                        💻
                      </div>
                      
                      {/* Lógica de Badge traducida */}
                      {project.liveLink ? (
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${project.theme.bgBadge} ${project.theme.border} ${project.theme.text}`}>
                          {t('projects.btnDemo')} 🚀
                        </span>
                      ) : project.isPrivate ? (
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${project.theme.bgBadge} ${project.theme.border} ${project.theme.text}`}>
                          {t('projects.privateRepo')} 🔒
                        </span>
                      ) : (
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${project.theme.bgBadge} ${project.theme.border} ${project.theme.text}`}>
                          {t('projects.openSource')}
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-2 leading-tight">
                      {project.technicalTitle}
                    </h3>
                    
                    <p className={`text-lg font-bold uppercase tracking-widest mb-6 ${project.theme.text}`}>
                      {project.brandName}
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                            highlightedTech === tech
                              ? `${project.theme.text} ${project.theme.bgBadge} border-2 ${project.theme.border}` 
                              : 'text-slate-300 bg-slate-800/80 border border-slate-700/50'
                          }`}
                        >
                          {tech}
                        </span>
                      )
                      )}
                    </div>

                    {/* Botones de enlace condicionales - Traducidos */}
                    <div className="flex gap-4 lg:gap-6 flex-wrap">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`px-6 py-4 lg:px-8 font-extrabold rounded-xl transition-all hover:scale-105 shadow-lg flex items-center gap-2 ${project.theme.button}`}
                        >
                          {t('projects.btnDemo').replace(' 🚀', '')} ↗
                        </a>
                      )}
                      {!project.isPrivate && project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-6 py-4 lg:px-8 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-slate-500 shadow-lg flex items-center gap-2"
                        >
                          {t('projects.btnCode')} ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* --- LADO DE LA IMAGEN --- */}
                  <div className="w-full lg:w-7/12 aspect-video group perspective-1000 relative z-10">
                    <div className={`w-full h-full transition-transform duration-700 ${isEven ? 'group-hover:-rotate-y-2' : 'group-hover:rotate-y-2'}`}>
                      <ImageCarousel 
                        images={project.images} 
                        title={project.technicalTitle} 
                        onExpand={setExpandedImage} 
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-3 rounded-full transition-all"
            onClick={() => setExpandedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={expandedImage} 
            alt="Vista Expandida" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}