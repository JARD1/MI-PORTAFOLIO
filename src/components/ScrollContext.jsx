import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const ScrollContext = createContext();

// 2. Crear el componente Provider
export const ScrollProvider = ({ children }) => {
  const [highlightedTech, setHighlightedTech] = useState(null);

  return (
    <ScrollContext.Provider value={{ highlightedTech, setHighlightedTech }}>
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll debe usarse dentro de un ScrollProvider');
  }
  return context;
};