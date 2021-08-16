import React, { ButtonHTMLAttributes } from 'react';

import StyledButton from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ type = 'button', children, onClick }: IProps) => (
   <StyledButton type={type} onClick={onClick}>
      {children}
   </StyledButton>
);

export default Button;
