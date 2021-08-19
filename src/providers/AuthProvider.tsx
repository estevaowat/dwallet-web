import React, { useState } from 'react';

import AuthContext from '../contexts/AuthContext';
import IResponseUserAuthentication from '../interfaces/IResponseUserAuthentication';
import IUserAuthenticationDto from '../interfaces/IUserAuthenticationDto';
import userAuthenticationService from '../services/userAuthenticationService';

interface IProps {
   children: React.ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
   const [user, setUser] = useState<IResponseUserAuthentication | null>(null);

   const login = async ({ email, password }: IUserAuthenticationDto) => {
      const userSigned = await userAuthenticationService.authenticateUser({
         email,
         password,
      });
      setUser(userSigned);
   };

   const logout = async () => {
      setUser(null);
   };

   return (
      <AuthContext.Provider
         value={{
            signed: !!user,
            user,
            login,
            logout,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
