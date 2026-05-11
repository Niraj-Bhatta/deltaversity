import React, { createContext, useState, useLayoutEffect, useContext } from 'react';

const ThemeContext = createContext();

// Read preference synchronously before first render.
// Default is LIGHT — only switch to dark if the user has explicitly saved 'dark'.
const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return false; // Default: light mode
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // useLayoutEffect fires synchronously BEFORE the browser paints —
  // this prevents any flash of incorrect theme on load/toggle.
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
