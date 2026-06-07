// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations'; // Ajusta la ruta


// 1. Creamos el contexto
const LanguageContext = createContext();

// 2. Creamos el Provider que envolverá tu App
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Inglés por defecto

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Función traductora 't'
  const t = (key) => {
    // Permite buscar claves anidadas como "hero.greeting"
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      if (result[k] === undefined) return key; // Si no encuentra, devuelve la clave
      result = result[k];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);