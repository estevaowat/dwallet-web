import React from 'react';

import { ThemeStore } from '../../../stores/ThemeStore';
import GlobalStyles from '../../../styles/createGlobalStyles';
import Login from '../Login';
import StyledApp from './styles';

const App = () => (
   <>
      <ThemeStore>
         <GlobalStyles />
         <StyledApp>
            <Login />
         </StyledApp>
      </ThemeStore>
   </>
);

export default App;
