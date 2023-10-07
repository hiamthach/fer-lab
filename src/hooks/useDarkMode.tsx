import { useEffect, useLayoutEffect, useState } from 'react';

interface IDarkMode {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function useDarkMode(): IDarkMode {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Load the dark mode preference from localStorage (if available)
  useLayoutEffect(() => {
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
