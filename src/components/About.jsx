export function About() {
  return (
    <section id="acerca" className="py-24 bg-[#0a0f1c] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Cabecera de la sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4 text-center md:text-left">
          Acerca de <span className="text-emerald-400">mí</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          {/* Texto principal (Narrativa Profesional) */}
          <div className="flex-1 space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Soy un Desarrollador de Software radicado en Venezuela, enfocado en la creación de arquitecturas robustas y eficientes. Actualmente curso mis estudios de Informática en la <span className="text-emerald-400 font-semibold">UNEXCA, núcleo La Floresta</span>, donde integro continuamente los fundamentos académicos con la aplicación práctica en el desarrollo de software.
            </p>
            <p>
              Mi enfoque principal reside en el desarrollo <strong>Backend</strong>. Disfruto el reto de analizar problemas de negocio complejos para transformarlos en sistemas limpios, seguros y altamente escalables, empleando tecnologías como Java, Spring Boot y Python.
            </p>
            <p>
              Más allá del código, considero que el pensamiento estratégico es fundamental para un ingeniero. Lecturas de filosofía táctica, como <em>El libro de los cinco anillos</em>, moldean mi disciplina y mi enfoque hacia la resolución de problemas. En mi tiempo libre, mantengo mi curiosidad técnica ensamblando hardware y ejercitando la toma de decisiones rápidas a través de los eSports de forma competitiva.
            </p>
          </div>

          {/* Tarjetas de datos rápidos (Bento Box style) */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">📍</div>
              <h3 className="text-slate-100 font-bold mb-1">Ubicación</h3>
              <p className="text-slate-400 text-sm">Venezuela, Caracas.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">🎓</div>
              <h3 className="text-slate-100 font-bold mb-1">Educación</h3>
              <p className="text-slate-400 text-sm">Informática.<br/>UNEXCA (La Floresta).</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">💡</div>
              <h3 className="text-slate-100 font-bold mb-1">Perfil Analítico</h3>
              <p className="text-slate-400 text-sm">Software, Estrategia, Hardware y eSports.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}