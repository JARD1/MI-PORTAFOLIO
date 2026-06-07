export const projects = [
  {
    id: 4,
    technicalTitle: "Plataforma E-commerce con Arquitectura Hexagonal",
    brandName: "Katalo (Salchi's Market)",
    description: "Tienda en línea B2B/B2C diseñada para resolver altas tasas de abandono mediante un 'checkout sin fricción' que genera pedidos estructurados directamente hacia WhatsApp. Incluye un panel administrativo a medida para la gestión del catálogo. A nivel de ingeniería, el código implementa Arquitectura Hexagonal pura, aislando completamente el Core del negocio de la capa de Infraestructura y el framework, garantizando una base de código altamente escalable y agnóstica.",
    techStack: ["Next.js (App Router)", "TypeScript", "Arquitectura Hexagonal", "WhatsApp API", "Tailwind CSS"],
    isPrivate: false,
    githubLink: "https://github.com/JARD1/KATALO",
    liveLink: "https://katalo-sooty.vercel.app/",
    images: [
      "https://i.ibb.co/hphnxPy/7.jpg",
      "https://i.ibb.co/39vrmKyw/4.jpg",
      "https://i.ibb.co/sdkRBNk0/5.jpg",
      "https://i.ibb.co/G4X1W4T5/6.jpg"
    ],
    // TEMA: Morado Vibrante
    theme: {
      text: "text-purple-400",
      border: "border-purple-500/20",
      bgBadge: "bg-purple-500/10",
      button: "bg-purple-500 hover:bg-purple-400 text-white",
      glow: "bg-purple-500/20"
    }
  },
  {
    id: 1,
    technicalTitle: "Sistema E-commerce Serverless de Alta Concurrencia",
    brandName: "GanaConJuvenil",
    description: "Plataforma transaccional B2C para la venta de rifas digitales, equipada con un panel administrativo (Backoffice) seguro para la verificación de pagos y control de inventario. El principal desafío técnico fue gestionar la concurrencia para evitar colisiones de boletos durante picos de tráfico. Esto se resolvió diseñando una arquitectura basada en API Serverless y Firebase para la sincronización de estado en vivo, implementando servicios de validación transaccional aislados.",
    techStack: ["React", "Vite", "Node.js", "Firebase", "Tailwind CSS"],
    isPrivate: false, 
    githubLink: "https://github.com/JARD1/GANACONJUVENIL", 
    liveLink: "https://ganaconjuvenil.vercel.app/", 
    images: [
      "https://i.ibb.co/Z6Zsryqr/3.jpg",
      "https://i.ibb.co/dwr7rB8j/1.jpg",
      "https://i.ibb.co/4n1k1gXL/2.jpg"
    ],
    // TEMA: Azul Empresarial
    theme: {
      text: "text-blue-400",
      border: "border-blue-500/20",
      bgBadge: "bg-blue-500/10",
      button: "bg-blue-500 hover:bg-blue-400 text-white",
      glow: "bg-blue-500/20"
    }
  },
  {
    id: 3,
    technicalTitle: "Pipeline Asíncrono de Datos y Automatización",
    brandName: "BotGP",
    description: "Servicio desarrollado para erradicar el cuello de botella operativo en la transformación, catalogación y publicación manual de paquetes digitales. Intercepta y redirige flujos de información en tiempo real integrando la API de Telegram con persistencia en Firebase. Construido con Python y AsyncIO para manejar alta concurrencia asíncrona, y empaquetado como un ejecutable independiente (.exe) para facilitar su despliegue y ejecución desatendida.",
    techStack: ["Python", "Telethon", "AsyncIO", "Firebase", "Arquitectura Orientada a Eventos"],
    isPrivate: false,
    githubLink: "https://github.com/JARD1/BOTGP-AUTO",
    liveLink: "", 
    images: [
      "https://i.ibb.co/wN77XYLw/16.jpg",
      "https://i.ibb.co/rKJb0Bgb/15.jpg"
    ],
    // TEMA: Cyan / Hacker 
    theme: {
      text: "text-cyan-400",
      border: "border-cyan-500/20",
      bgBadge: "bg-cyan-500/10",
      button: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
      glow: "bg-cyan-500/20"
    }
  },
  {
    id: 5,
    technicalTitle: "Plataforma de Distribución Digital SEO-Optimized",
    brandName: "KoaStore",
    description: "Aplicación Full-Stack desarrollada para unificar la catalogación y venta de paquetes de juegos digitales, resolviendo la fragmentación del inventario en múltiples plataformas. Construida sobre Next.js (App Router) aprovechando el enrutamiento dinámico para categorizar productos por consola, y Server-Side Rendering (SSR) para maximizar el SEO orgánico. Integra un panel de administración securizado respaldado por Firebase Admin SDK para la gestión centralizada de la tienda.",
    techStack: ["Next.js (App Router)", "React", "Node.js", "Firebase Admin", "Tailwind CSS"],
    isPrivate: false,
    githubLink: "https://github.com/JARD1/KOASTORE",
    liveLink: "https://koastore.vercel.app/",
    images: [
      "https://i.ibb.co/27kyTtjQ/9.jpg",
      "https://i.ibb.co/SXxn9STM/10.jpg",
      "https://i.ibb.co/gMXhVfgv/11.jpg",
      "https://i.ibb.co/BKPrWhrN/8.jpg"
    ],
    // TEMA: Rojo Gaming
    theme: {
      text: "text-red-400",
      border: "border-red-500/20",
      bgBadge: "bg-red-500/10",
      button: "bg-red-500 hover:bg-red-400 text-white",
      glow: "bg-red-500/20"
    }
  },
  {
    id: 6,
    technicalTitle: "Full-Stack SPA & API REST",
    brandName: "Notes App Challenge",
    description: "Aplicación Full-Stack desarrollada como prueba técnica bajo estrictos criterios de evaluación. El backend implementa una API RESTful en Java Spring Boot con una arquitectura en capas pura (Controller, Service, Repository) para la gestión del negocio. El frontend es una SPA altamente reactiva construida con Vite y React, aislando el consumo de red en servicios dedicados. Para garantizar una experiencia de evaluación sin fricción (DX), se diseñó un script de automatización en Bash (run.sh) que orquesta la compilación, el levantamiento del servidor y la inicialización del entorno cliente en un solo paso.",
    techStack: ["Java", "Spring Boot", "React", "Vite", "Docker", "Bash Scripting"],
    isPrivate: false,
    githubLink: "https://github.com/JARD1/MY-NOTES",
    liveLink: "https://my-notes-olive-gamma.vercel.app/", 
    images: [
      "https://i.ibb.co/zVpVQvd5/14.jpg",
      "https://i.ibb.co/Mx2Zp3rt/12.jpg",
      "https://i.ibb.co/5XHzDMR1/13.jpg"
    ],
    // TEMA: Amarillo / Ámbar (Estilo Sticky Note)
    theme: {
      text: "text-amber-400",
      border: "border-amber-500/20",
      bgBadge: "bg-amber-500/10",
      button: "bg-amber-500 hover:bg-amber-400 text-slate-950",
      glow: "bg-amber-500/20"
    }
  }
];