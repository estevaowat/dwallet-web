import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

const useAuth = () => {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error('You must use useAuth inside AuthProvider');
   }
   return context;
};

export default useAuth;