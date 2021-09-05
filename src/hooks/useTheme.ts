import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
   const { setTheme, theme } = useContext(ThemeContext);

   const toggleTheme = () => {
      setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
   };

   return {
      theme,
      toggleTheme,
   };
};

export default useTheme;
