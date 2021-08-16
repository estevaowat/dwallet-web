import React from 'react';

import { ThemeContextProvider } from '../../../contexts/ThemeContext';
import GlobalStyles from '../../../styles/createGlobalStyles';
import Login from '../Login';
import StyledApp from './styles';

const App = () => (
   <>
      <ThemeContextProvider>
         <GlobalStyles />
         <StyledApp>
            <Login />
         </StyledApp>
      </ThemeContextProvider>
   </>
);

export default App;
