import api from '../config/api';
import IResponseUserAuthentication from '../interfaces/IResponseUserAuthentication';
import IUserAuthenticationDto from '../interfaces/IUserAuthenticationDto';

const authenticateUser = async ({
   email,
   password,
}: IUserAuthenticationDto): Promise<IResponseUserAuthentication> => {
   try {
      const response = await api.post<IResponseUserAuthentication>(
         '/authentication',
         { email, password },
      );
      return response.data;
   } catch (error) {
      throw new Error(
         'E-mail or password are incorrect, please review your credentials.',
      );
   }
};

const logout = async (): Promise<void> => {
   // remove user cookie
};

export default {
   authenticateUser,
   logout,
};
