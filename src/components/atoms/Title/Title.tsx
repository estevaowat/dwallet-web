import React from 'react';
import './Title.scss';

interface IProps {
   children: string;
}

const Title = ({ children }: IProps) => (
   <span className="title">{children}</span>
);

export default Title;
