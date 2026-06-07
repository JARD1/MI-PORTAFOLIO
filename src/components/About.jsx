import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  // Función inteligente para mantener el formato (negritas, colores, cursivas) 
  // sin tener que meter etiquetas HTML dentro del archivo translations.js
  const formatText = (text) => {
    if (!text) return "";
    
    // Diccionario de frases clave a resaltar en ambos idiomas
    const highlights = {
      "Full-Stack Software Engineer": <strong key="1" className="text-slate-200">Full-Stack Software Engineer</strong>,
      "UNEXCA (La Floresta)": <span key="2" className="text-emerald-400 font-semibold">UNEXCA (La Floresta)</span>,
      "UNEXCA (La Floresta Campus)": <span key="3" className="text-emerald-400 font-semibold">UNEXCA (La Floresta Campus)</span>,
      "Ingeniería de Producto": <strong key="4">Ingeniería de Producto</strong>,
      "Product Engineering": <strong key="5">Product Engineering</strong>,
      "El libro de los cinco anillos": <em key="6">El libro de los cinco anillos</em>,
      "The Book of Five Rings": <em key="7">The Book of Five Rings</em>
    };

    let parts = [text];
    
    Object.keys(highlights).forEach(phrase => {
      const newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const subParts = part.split(phrase);
          for (let i = 0; i < subParts.length; i++) {
            newParts.push(subParts[i]);
            if (i < subParts.length - 1) {
              newParts.push(highlights[phrase]);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts;
  };

  return (
    <section id="acerca" className="py-24 bg-[#0a0f1c] border-t border-slate-800/50 relative overflow-hidden">
      
      {/* Resplandor de fondo para mantener la cohesión visual */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4 text-center md:text-left">
          {t('about.title')} <span className="text-emerald-400">{t('about.titleHighlight')}</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Texto principal (Narrativa Profesional) */}
          <div className="flex-1 space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>{formatText(t('about.p1'))}</p>
            <p>{formatText(t('about.p2'))}</p>
            <p>{formatText(t('about.p3'))}</p>
          </div>

          {/* Tarjetas de datos rápidos (Bento Box style) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all origin-bottom">📍</div>
              <h3 className="text-slate-100 font-bold mb-1 text-lg">{t('about.locationTitle')}</h3>
              {/* Dividimos la descripción por el punto para simular el <br/> original */}
              <p className="text-slate-400 text-sm">
                {t('about.locationDesc').split('. ').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}{i !== arr.length - 1 ? '.' : ''}
                    {i === 0 && <br/>}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all origin-bottom">🎓</div>
              <h3 className="text-slate-100 font-bold mb-1 text-lg">{t('about.eduTitle')}</h3>
              <p className="text-slate-400 text-sm">
                {t('about.eduDesc').split('. ').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}{i !== arr.length - 1 ? '.' : ''}
                    {i === 0 && <br/>}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all origin-bottom">🧠</div>
              <h3 className="text-slate-100 font-bold mb-1 text-lg">{t('about.profileTitle')}</h3>
              <p className="text-slate-400 text-sm">{t('about.profileDesc')}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}