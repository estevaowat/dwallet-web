import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../stores/ThemeStore';

interface IProps {
   children: React.ReactNode;
}

const Theme = ({ children }: IProps) => {
   const { theme } = useContext(ThemeContext);
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
