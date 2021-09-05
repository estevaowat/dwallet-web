import React, { useState, createContext } from 'react';

interface IThemeContext {
   theme: string;
   setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IProps {
   children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: IProps) => {
   const [theme, setTheme] = useState('dark-theme');

   return (
      <ThemeContext.Provider value={{ setTheme, theme }}>
         <div className={theme}>{children}</div>
      </ThemeContext.Provider>
   );
};

export { ThemeContext, ThemeContextProvider };
