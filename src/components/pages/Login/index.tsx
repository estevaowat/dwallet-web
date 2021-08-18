import React, { useState } from 'react';

import walletImage from '../../../assets/login-image.jpg';
import useAuth from '../../../hooks/useAuth';
import userAuthenticationService from '../../../services/userAuthenticationService';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import './login.styles.css';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const { login } = useAuth();

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         await login({ email, password });
      } catch ({ message }) {
         setErrorMessage(message);
      }
   };

   return (
      <div className="login-container">
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
      </div>
   );
};
export default Login;
