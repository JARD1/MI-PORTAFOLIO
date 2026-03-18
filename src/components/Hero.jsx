import React, { useState, useEffect, useCallback, useMemo } from 'react';
import jorgePhoto from '../assets/Jorge.png'; 

// --------------------------------------------------------------------------
// 1. Componente Typewriter Inteligente
// --------------------------------------------------------------------------
const TypewriterText = ({ text, className = "", cursor = false, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone || !text) return;

    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, 50); 
      return () => clearTimeout(timeoutId);
    } else {
      const pauseBeforeComplete = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete(); 
      }, 400); 
      return () => clearTimeout(pauseBeforeComplete);
    }
  }, [displayedText, text, isDone, onComplete]);

  return (
    <>
      <span className={className}>{displayedText}</span>
      {cursor && (
        <span className="inline-block w-3 h-[0.9em] ml-1 bg-emerald-400 animate-cursor-blink align-middle shadow-[0_0_8px_#10b981]"></span>
      )}
    </>
  );
};

// --------------------------------------------------------------------------
// 2. Componente del Marco Giratorio 
// --------------------------------------------------------------------------
const RotatingFrame = () => {
  const techs = ["Java", "Spring Boot", "Python", "React", "Node.js", "SQL"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % techs.length); 
        setFade(true); 
      }, 300); 
    }, 2500); 
    
    return () => clearInterval(interval);
  }, [techs.length]);

  return (
    <span className="inline-flex items-center gap-1 font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 ml-2 align-middle">
      <span className="text-slate-500">{"["}</span>
      <span className={`min-w-[110px] text-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {techs[index]}
      </span>
      <span className="text-slate-500">{"]"}</span>
    </span>
  );
};

// --------------------------------------------------------------------------
// 3. Componente "TechOrbit" (AHORA SÍ: Matemáticamente perfecto y horizontal)
// --------------------------------------------------------------------------
const TechOrbit = () => {
  const techs = useMemo(() => ["JAVA", "PYTHON", "SPRING BOOT", "REACT", "NODE.JS", "SQL"], []);
  const orbitDuration = "30s"; 

  return (
    // Anillo principal que gira
    <div 
      className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-emerald-500/20 z-0 animate-tech-orbit"
      style={{ animationDuration: orbitDuration }}
    >
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * 360;
        
        return (
          // 1. Posicionamos cada contenedor en su ángulo correspondiente del anillo
          <div
            key={tech}
            className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
          >
            {/* 2. Colocamos el texto en el borde exterior y DES-ROTAMOS el ángulo estático */}
            <div
              className="absolute top-0 left-1/2 pointer-events-auto"
              style={{ transform: `translate(-50%, -50%) rotate(-${angle}deg)` }}
            >
              {/* 3. El texto gira al revés (dinámicamente) para contrarrestar el anillo principal */}
              <div 
                className="px-4 py-1.5 bg-[#0a0f1c] border border-emerald-500/40 rounded-full font-mono text-emerald-400 text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] whitespace-nowrap animate-tech-orbit-reverse"
                style={{ animationDuration: orbitDuration }}
              >
                <span className="text-emerald-400">{tech}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --------------------------------------------------------------------------
// 4. Componente Principal Hero
// --------------------------------------------------------------------------
export function Hero() {
  const [step, setStep] = useState(0);
  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* FONDO MATRIX */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='12' fill='%2310b981'%3E%7B%3C/text%3E%3Ctext x='50' y='40' font-family='monospace' font-size='10' fill='%2310b981'%3E010%3C/text%3E%3Ctext x='90' y='15' font-family='monospace' font-size='14' fill='%2310b981'%3E;%3C/text%3E%3Ctext x='25' y='80' font-family='monospace' font-size='10' fill='%2310b981'%3Ereturn;%3C/text%3E%3Ctext x='80' y='95' font-family='monospace' font-size='12' fill='%2310b981'%3E%7D%3C/text%3E%3Ctext x='5' y='110' font-family='monospace' font-size='8' fill='%2310b981'%3Epublic%3C/text%3E%3Ctext x='65' y='60' font-family='monospace' font-size='12' fill='%2310b981'%3E()%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-[#0a0f1c] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
        
        {/* Columna de Texto */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 text-xs">
                status_check<span className="text-slate-500">::</span>OK_TO_HIRE
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight min-h-[120px] md:min-h-[144px]">
            <TypewriterText text="$ > Hola, soy " cursor={step === 0} onComplete={nextStep} />
            <br className="hidden md:block"/>
            {step >= 1 && (
              <TypewriterText text="Jorge Diaz" className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent" cursor={step === 1} onComplete={nextStep} />
            )}
          </h2>
          
          <p className="text-xl leading-relaxed max-w-2xl min-h-[160px] sm:min-h-[120px] md:min-h-[96px] font-mono text-slate-400">
            {step >= 2 && (
              <TypewriterText text="Desarrollador de Software enfocado en Backend y Automatización. Transformo problemas complejos en soluciones eficientes usando" cursor={step === 2} onComplete={nextStep} />
            )}
            {step >= 3 && (
              <React.Fragment>
                <RotatingFrame />
                <span className="inline-block w-3 h-[0.9em] ml-2 bg-emerald-400 animate-cursor-blink align-middle shadow-[0_0_8px_#10b981]"></span>
              </React.Fragment>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
            <a href="#proyectos" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
              <span>Ver mis proyectos</span>
              <span className="text-xs font-mono">./projects.sh</span>
            </a>
            <a href="#contacto" className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold py-3 px-8 rounded-xl transition-all bg-slate-800/50 hover:bg-slate-800 flex items-center justify-center">
              Contactar<span className="text-emerald-500 font-mono ml-1">;</span>
            </a>
          </div>
        </div>
        
        {/* Columna Visual */}
        <div className="flex-1 flex justify-center items-center mt-16 md:mt-0 relative min-h-[360px] md:min-h-[460px]">
          <div className="relative flex items-center justify-center w-full h-full">
            
            {/* Órbita de palabras */}
            {step >= 3 && <TechOrbit />}

            {/* Foto de perfil */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 group z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 animate-pulse duration-1000"></div>
              <div className="relative w-full h-full bg-slate-900 border-2 border-slate-800 group-hover:border-emerald-500/50 rounded-full flex items-center justify-center shadow-2xl overflow-hidden transition-colors duration-500">
                <img 
                  src={jorgePhoto} 
                  alt="Foto profesional de Jorge Diaz" 
                  className="absolute w-[119%] h-[119%] max-w-none object-contain object-[0px_22px] transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}