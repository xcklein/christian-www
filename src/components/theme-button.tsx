"use client";

import { useEffect, useState } from 'react';
import { IconButton } from './material';

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const handleToggle = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setDarkMode(!darkMode);
  };

  return (
    <IconButton onClick={handleToggle}>
      {darkMode ? <i className="fas fa-moon text-lg"/> : <i className="fas fa-sun text-lg"/>}
    </IconButton>
  );
};