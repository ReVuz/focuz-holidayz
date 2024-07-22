// hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light'); // Default to 'light'

  useEffect(() => {
    // This code runs only on the client side
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and apply theme
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, setTheme];
};