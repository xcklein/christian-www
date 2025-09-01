'use client';

import { createContext, useEffect, useState } from 'react';

export interface DarkContextThing {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export const DarkContext = createContext({} as DarkContextThing);

export function DarkProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  const setDark = (value: boolean) => {
    if (value) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    setIsDark(value);
  };

  return (
    <DarkContext.Provider value={{ isDark, setIsDark: setDark }}>
      {children}
    </DarkContext.Provider>
  );
}
