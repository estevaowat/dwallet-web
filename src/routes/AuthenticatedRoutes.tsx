import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Login from '../components/pages/Login';

const AuthenticatedRoutes: React.FC = () => (
   <BrowserRouter>
      <Route exact path="/" component={Home} />
   </BrowserRouter>
);

export default AuthenticatedRoutes;
