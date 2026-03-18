import React, { useState } from 'react';

export function Footer() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulación de envío
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <footer id="contacto" className="bg-[#0a0f1c] pt-24 pb-8 px-8 relative overflow-hidden border-t border-slate-800/50">
      
      {/* Brillo de fondo para profundidad visual */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 mb-20 relative z-10">
        
        {/* Columna Izquierda: Mensaje Estratégico para Reclutadores */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            ¿Hablamos de <span className="text-emerald-400">Software</span>?
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            <p>
              Mi enfoque está en diseñar y desarrollar soluciones que impulsen el crecimiento tecnológico y garanticen la estabilidad de los sistemas.
            </p>
            <p>
              Si buscas talento comprometido con las buenas prácticas en <strong>Backend</strong> o quieres explorar nuevas perspectivas sobre el ecosistema de software actual, estaré encantado de conectar. Mi bandeja de entrada es el primer paso para una gran colaboración.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <div className="flex gap-6">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all hover:-translate-y-1" title="GitHub">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all hover:-translate-y-1" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
            
            <a 
              href="/cv-jorge-diaz.pdf" 
              download
              className="px-6 py-2.5 bg-slate-800/50 hover:bg-slate-800 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg text-sm font-bold transition-all flex items-center gap-2 group"
            >
              <span>Descargar CV</span>
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:w-1/2 bg-slate-900/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nombre</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="Ej. Reclutador Tech"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="correo@empresa.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensaje</label>
              <textarea 
                id="message" 
                required
                rows="4"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Hola Jorge, nos gustaría conocer más sobre tu experiencia en Backend..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">Procesando...</span>
              ) : status === 'success' ? (
                <span>¡Mensaje Enviado! 🚀</span>
              ) : (
                <span>Enviar Mensaje</span>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
        <p>© {new Date().getFullYear()} Jorge Diaz. Todos los derechos reservados.</p>
        <p>System.out.println("Ready to work");</p>
      </div>
    </footer>
  );
}