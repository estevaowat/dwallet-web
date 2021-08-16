import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const useTheme = () => {
   const { setTheme, theme } = useContext(ThemeContext);

   const toggleTheme = () => {
      setTheme(theme.name === 'light' ? dark : light);
   };

   return {
      theme,
      toggleTheme,
   };
};

export default useTheme;
