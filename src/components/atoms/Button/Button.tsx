import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ type = 'button', children, onClick }: IProps) => (
   <button className="button" type={type} onClick={onClick}>
      {children}
   </button>
);

export default Button;
