import React, { InputHTMLAttributes } from 'react';
import './Input.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
   hasError: boolean;
}

const Input: React.FC<IProps> = ({
   className,
   hasError,
   id,
   type,
   placeholder = '',
   value = '',
   onChange,
   required,
   name,
   min,
}: IProps) => {
   const classesNames = hasError
      ? `${className} has-error input`
      : `${className} input`;
   return (
      <input
         id={id}
         type={type}
         name={name}
         className={classesNames}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         required={required}
         min={min}
      />
   );
};

export default Input;
