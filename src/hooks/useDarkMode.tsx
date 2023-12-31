import { useEffect, useState } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface IDarkMode {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function useDarkMode(): IDarkMode {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Load the dark mode preference from localStorage (if available)
  useIsomorphicLayoutEffect(() => {
    const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModePreferred);
  }, []);

  // Update the dark mode preference and localStorage when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Apply Tailwind CSS classes to the document body
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
}

export default useDarkMode;
