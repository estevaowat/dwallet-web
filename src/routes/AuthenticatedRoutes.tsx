import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/organisms/Header/Header';
import Home from '../pages/Home/Home';
import Invoice from '../pages/Invoice/Invoice';

const AuthenticatedRoutes: React.FC = () => (
   <>
      <Header />
      <BrowserRouter>
         <Route exact path="/" component={Home} />
         <Route exact path="/invoice" component={Invoice} />
      </BrowserRouter>
   </>
);

export default AuthenticatedRoutes;
