import React from 'react';

import StyledErrorMessage from './styles';

interface IProps {
   text: string;
}

const ErrorMessage = ({ text }: IProps) => (
   <StyledErrorMessage>{text}</StyledErrorMessage>
);

export default ErrorMessage;
