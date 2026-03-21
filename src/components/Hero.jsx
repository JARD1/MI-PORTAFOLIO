import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import jorgePhoto from '../assets/Jorge.png'; 

// --------------------------------------------------------------------------
// 1. Fondo de Partículas (Red Tecnológica) usando Canvas
// --------------------------------------------------------------------------
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    // Reduje un poco la cantidad de 80 a 65 para que, al ser más grandes, no sature la pantalla
    const numParticles = 65; 

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // AQUÍ ESTÁ EL CAMBIO: Radio más grande (entre 2.5 y 6px de radio)
        radius: Math.random() * 3.5 + 2.5, 
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Mover partículas
        p.x += p.vx;
        p.y += p.vy;

        // Rebotar en los bordes
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.6)'; // Color Emerald un poco más opaco para resaltar
        ctx.fill();

        // Conectar con otras partículas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // La línea se desvanece mientras más lejos estén, pero es más notoria ahora
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.25 - distance / 640})`; 
            ctx.lineWidth = 1; // Líneas un poco más gruesas para acompañar a los nodos grandes
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};

// --------------------------------------------------------------------------
// 2. Componente Typewriter Inteligente
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
// 3. Componente del Marco Giratorio 
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
// 4. Componente "TechOrbit"
// --------------------------------------------------------------------------
const TechOrbit = () => {
  const techs = useMemo(() => ["JAVA", "PYTHON", "SPRING BOOT", "REACT", "NODE.JS", "SQL"], []);
  const orbitDuration = "30s"; 

  return (
    <div 
      className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-emerald-500/20 z-0 animate-tech-orbit"
      style={{ animationDuration: orbitDuration }}
    >
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * 360;
        
        return (
          <div
            key={tech}
            className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
          >
            <div
              className="absolute top-0 left-1/2 pointer-events-auto"
              style={{ transform: `translate(-50%, -50%) rotate(-${angle}deg)` }}
            >
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
// 5. Componente Principal Hero
// --------------------------------------------------------------------------
export function Hero() {
  const [step, setStep] = useState(0);
  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* FONDO ANIMADO DE PARTÍCULAS TECNOLÓGICAS */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/70 to-[#0a0f1c] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
        
        {/* Columna de Texto */}
        <div className="flex-1 space-y-6 text-center md:text-left relative z-20">
          
          <div className="flex justify-center md:justify-start relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 text-xs">
                status_check<span className="text-slate-500">::</span>OK_TO_HIRE
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight min-h-[120px] md:min-h-[144px] relative z-20">
            <TypewriterText text="$ > Hola, soy " cursor={step === 0} onComplete={nextStep} />
            <br className="hidden md:block"/>
            {step >= 1 && (
              <TypewriterText text="Jorge Diaz" className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent" cursor={step === 1} onComplete={nextStep} />
            )}
          </h2>
          
          <p className="text-xl leading-relaxed max-w-2xl min-h-[160px] sm:min-h-[120px] md:min-h-[96px] font-mono text-slate-400 relative z-20">
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

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start relative z-20">
            <a href="#proyectos" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
              <span>Ver mis proyectos</span>
              <span className="text-xs font-mono">./projects.sh</span>
            </a>
            <a href="#contacto" className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold py-3 px-8 rounded-xl transition-all bg-slate-800/50 hover:bg-slate-800 flex items-center justify-center backdrop-blur-sm">
              Contactar<span className="text-emerald-500 font-mono ml-1">;</span>
            </a>
          </div>

          {/* Fila de Íconos de Contacto Rápido */}
          <div className="flex justify-center md:justify-start gap-5 pt-6 relative z-20">
            <a href="https://github.com/JARD1" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all" title="GitHub">
              <span className="sr-only">GitHub</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jorge-diaz-1268b02a0/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://wa.me/584241583601" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-emerald-500 hover:-translate-y-1 transition-all" title="WhatsApp">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21c-1.566 0-3.093-.418-4.444-1.213l-.317-.188-3.315.87.884-3.232-.206-.328C3.803 15.534 3 13.824 3 12c0-4.962 4.038-9 9.031-9 4.994 0 9 4.038 9 9s-4.006 9-9 9zm0-16.5c-4.136 0-7.5 3.364-7.5 7.5 0 1.34.35 2.64 1.012 3.774l.115.197-.6 2.19 2.246-.588.192.114C8.59 18.666 9.872 19 11.231 19c4.135 0 7.5-3.364 7.5-7.5s-3.365-7.5-7.5-7.5zM16.036 14.5c-.218-.11-1.285-.635-1.484-.708-.199-.073-.344-.11-.489.11-.145.22-.562.708-.689.853-.127.146-.255.164-.473.054-.218-.11-.917-.338-1.748-1.077-.647-.577-1.084-1.29-1.211-1.51-.127-.22-.014-.339.095-.449.098-.098.218-.255.327-.383.11-.127.145-.22.218-.364.073-.146.036-.274-.018-.384-.055-.11-.489-1.18-.67-1.616-.178-.426-.359-.368-.489-.375h-.418c-.145 0-.382.055-.581.274-.2.22-.763.745-.763 1.817s.781 2.108.89 2.254c.11.146 1.536 2.345 3.722 3.29.519.225.924.359 1.24.46.52.164.993.14 1.366.085.42-.062 1.285-.525 1.467-1.032.182-.508.182-.942.127-1.032-.054-.09-.2-.146-.418-.256z" /></svg>
            </a>
            <a href="#contacto" className="p-2 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all" title="Email">
              <span className="sr-only">Email</span>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
        
        {/* Columna Visual */}
        <div className="flex-1 flex justify-center items-center mt-16 md:mt-0 relative min-h-[360px] md:min-h-[460px]">
          <div className="relative flex items-center justify-center w-full h-full">
            
            {/* Órbita de palabras - APARECE DESDE EL INICIO */}
            <TechOrbit />

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