import React from 'react';

import './TitleHeader.scss';

interface IProps {
   text: string;
}

const TitleHeader = ({ text }: IProps) => (
   <span className="title-header">{text}</span>
);

export default TitleHeader;
