import React, { useState, createContext } from 'react';

import { ITheme } from '../styles/ITheme';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IProps {
   children: React.ReactNode;
}
interface IThemeContext {
   theme: ITheme;
   toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
   theme: dark,
   toggleTheme: () => {},
});

const ThemeStore = ({ children }: IProps) => {
   const [theme, setTheme] = useState<ITheme>(dark);

   const toggleTheme = () => {
      const newTheme = theme.name === 'light' ? dark : light;
      setTheme(newTheme);
   };

   return (
      <ThemeContext.Provider
         value={{
            theme,
            toggleTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

export { ThemeStore, ThemeContext };
