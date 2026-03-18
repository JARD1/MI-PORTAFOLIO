import React, { useState } from 'react';

export function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú automáticamente al hacer clic en un enlace
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-slate-800/50 w-full">
      {/* Aumentamos a max-w-7xl y añadimos w-full. 
        Esto asegura que el flex justify-between empuje los elementos a las esquinas reales.
      */}
      <div className="flex justify-between items-center py-5 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Lado Izquierdo: Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          Jorge Diaz<span className="text-slate-500">.dev</span>
        </h1>
        
        {/* Lado Derecho: Enlaces Desktop */}
        <ul className="hidden md:flex gap-10 text-slate-400 font-medium text-sm">
          <li>
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a>
          </li>
          <li>
            <a href="#acerca" className="hover:text-emerald-400 transition-colors">Acerca de mi</a>
          </li>
          <li>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Mi Stack</a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Mis Proyectos</a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a>
          </li>
        </ul>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-300 text-2xl focus:outline-none transition-transform hover:text-emerald-400"
          aria-label="Alternar menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú Desplegable (Mobile) */}
      <div 
        className={`md:hidden absolute w-full bg-[#0a0f1c] border-b border-slate-800/50 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col text-slate-400 font-medium text-base">
          <li>
            <a href="#inicio" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">Inicio</a>
          </li>
          <li>
            <a href="#acerca" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">Acerca de mi</a>
          </li>
          <li>
            <a href="#stack" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">Mi Stack</a>
          </li>
          <li>
            <a href="#proyectos" onClick={handleLinkClick} className="block py-4 px-6 border-b border-slate-800/50 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">Mis Proyectos</a>
          </li>
          <li>
            <a href="#contacto" onClick={handleLinkClick} className="block py-4 px-6 hover:text-emerald-400 hover:bg-slate-900/50 transition-all">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}