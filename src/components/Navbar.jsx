import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-slate-800/50 w-full">
      <div className="flex justify-between items-center py-5 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Lado Izquierdo: Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight cursor-pointer">
          <a href="#inicio">Jorge Diaz<span className="text-slate-500">.dev</span></a>
        </h1>
        
        {/* Lado Derecho: Enlaces + Controles */}
        <div className="flex items-center gap-6 md:gap-10">
          
          {/* Enlaces Desktop */}
          <ul className="hidden md:flex gap-8 text-slate-400 font-medium text-sm">
            <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">{t('nav.home')}</a></li>
            <li><a href="#acerca" className="hover:text-emerald-400 transition-colors">{t('nav.about')}</a></li>
            <li><a href="#stack" className="hover:text-emerald-400 transition-colors">{t('nav.stack')}</a></li>
            <li><a href="#proyectos" className="hover:text-emerald-400 transition-colors">{t('nav.projects')}</a></li>
            <li><a href="#contacto" className="hover:text-emerald-400 transition-colors">{t('nav.contact')}</a></li>
          </ul>

          {/* Contenedor de Botones de Acción */}
          <div className="flex items-center gap-4">
            
            {/* Botón Toggle de Idioma con Banderas SVG */}
<button 
  onClick={toggleLanguage}
  className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold font-mono rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 transition-all"
  aria-label="Cambiar idioma"
>
  {language === 'es' ? (
    <>
      <img src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="Español" className="w-5 h-4 rounded-sm" /> 
      <span className="hidden sm:inline">ES</span>
    </>
  ) : (
    <>
      <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" alt="English" className="w-5 h-4 rounded-sm" /> 
      <span className="hidden sm:inline">EN</span>
    </>
  )}
</button>

            {/* Botón Menú Hamburguesa (Mobile) */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-slate-300 text-2xl focus:outline-none transition-transform hover:text-emerald-400"
              aria-label="Alternar menú"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable (Mobile) */}
      <div 
        className={`md:hidden absolute w-full bg-[#0a0f1c] border-b border-slate-800/50 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col text-slate-400 font-medium text-base">
          <li><a href="#inicio" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">{t('nav.home')}</a></li>
          <li><a href="#acerca" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">{t('nav.about')}</a></li>
          <li><a href="#stack" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">{t('nav.stack')}</a></li>
          <li><a href="#proyectos" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">{t('nav.projects')}</a></li>
          <li><a href="#contacto" onClick={handleLinkClick} className="block py-4 px-6 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">{t('nav.contact')}</a></li>
        </ul>
      </div>
    </nav>
  );
}