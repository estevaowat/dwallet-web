import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Invoice from '../components/pages/Invoice';

const AuthenticatedRoutes: React.FC = () => (
   <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/invoice" component={Invoice} />
   </BrowserRouter>
);

export default AuthenticatedRoutes;
