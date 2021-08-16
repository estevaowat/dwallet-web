import api from '../config/api';

interface IUserAuthenticationDto {
   email: string;
   password: string;
}
interface IResponseUserAuthentication {
   jwt: string;
}

const authenticateUser = async ({
   email,
   password,
}: IUserAuthenticationDto): Promise<void> => {
   // const { data } = await api.post<IResponseUserAuthentication>(
   //    '/authentication',
   //    { email, password },
   // );

   const data = { jwt: null };

   if (data.jwt == null) {
      throw new Error('E-mail or password incorrect, please review.');
   }

   // save token in localstorage or somewhere similar;
};

export default {
   authenticateUser,
};
