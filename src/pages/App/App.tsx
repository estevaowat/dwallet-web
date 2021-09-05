import React from 'react';

import { ThemeContextProvider } from '../../contexts/ThemeContext';
import AuthProvider from '../../providers/AuthProvider';
import Routes from '../../routes';
import '../../styles/reset.scss';
import './App.scss';

const App = () => (
   <AuthProvider>
      <ThemeContextProvider>
         <div className="app">
            <Routes />
         </div>
      </ThemeContextProvider>
   </AuthProvider>
);

export default App;
