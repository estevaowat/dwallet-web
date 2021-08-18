import { createContext } from 'react';

import IResponseUserAuthentication from '../interfaces/IResponseUserAuthentication';
import IUserAuthenticationDto from '../interfaces/IUserAuthenticationDto';

interface IAuthContextData {
   signed: boolean;
   user: IResponseUserAuthentication | null;
   login: (data: IUserAuthenticationDto) => Promise<void>;
   logout: () => Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

export default AuthContext;
