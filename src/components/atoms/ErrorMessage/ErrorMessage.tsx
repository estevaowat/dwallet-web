import React from 'react';

import './ErrorMessage.scss';

interface IProps {
   text: string;
}

const ErrorMessage = ({ text }: IProps) => (
   <span className="error-message">{text}</span>
);

export default ErrorMessage;
