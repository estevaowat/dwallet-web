import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../components/pages/Login';

const SignRoutes: React.FC = () => (
   <BrowserRouter>
      <Route exact path="/" component={Login} />
   </BrowserRouter>
);

export default SignRoutes;
