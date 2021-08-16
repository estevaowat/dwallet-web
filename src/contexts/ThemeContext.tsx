import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ITheme } from '../styles/ITheme';
import light from '../styles/themes/light';

interface IThemeContext {
   theme: ITheme;
   setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IProps {
   children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: IProps) => {
   const [theme, setTheme] = useState(light);

   return (
      <ThemeContext.Provider value={{ setTheme, theme }}>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
   );
};

export { ThemeContext, ThemeContextProvider };
