import React from 'react';

import { ThemeContextProvider } from '../../../contexts/ThemeContext';
import AuthProvider from '../../../providers/AuthProvider';
import Routes from '../../../routes';
import GlobalStyles from '../../../styles/createGlobalStyles';
import StyledApp from './styles';

const App = () => (
   <>
      <AuthProvider>
         <ThemeContextProvider>
            <GlobalStyles />
            <StyledApp>
               <Routes />
            </StyledApp>
         </ThemeContextProvider>
      </AuthProvider>
   </>
);

export default App;
