import React, { useState, useEffect } from 'react';

import walletImage from '../../assets/login-image.svg';
import Button from '../../components/atoms/Button/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage';
import Input from '../../components/atoms/Input/Input';
import Title from '../../components/atoms/Title/Title';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

import './Login.scss';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const { login } = useAuth();
   const { toggleTheme } = useTheme();

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         await login({ email, password });
      } catch (error) {
         const { message } = error as Error;
         setErrorMessage(message);
      }
   };

   useEffect(() => {
      toggleTheme();
   }, []);
   return (
      <main className="login-container">
         <form onSubmit={handleSubmit} className="form-container">
            <Title>Welcome Back</Title>
            <Input
               type="email"
               placeholder="E-mail"
               value={email}
               onChange={e => setEmail(e.target.value)}
               hasError={!!errorMessage}
               required
            />
            <Input
               type="password"
               placeholder="Password"
               value={password}
               onChange={e => setPassword(e.target.value)}
               hasError={!!errorMessage}
               required
            />
            {errorMessage && <ErrorMessage text={errorMessage} />}
            <Button type="submit">Login</Button>
         </form>
         <div className="image-login-container">
            <img src={walletImage} alt="Guy holding a wallet" />
         </div>
      </main>
   );
};
export default Login;
