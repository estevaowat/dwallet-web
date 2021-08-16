import React, { InputHTMLAttributes } from 'react';

import StyledInput from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
   hasError: boolean;
}

const Input: React.FC<IProps> = ({
   className,
   hasError,
   type,
   placeholder = '',
   value = '',
   onChange,
   required,
}: IProps) => {
   const classesNames = hasError ? `${className} has-error` : className;
   return (
      <StyledInput
         type={type}
         className={classesNames}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         required={required}
      />
   );
};

export default Input;
