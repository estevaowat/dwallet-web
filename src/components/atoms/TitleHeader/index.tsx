import React from 'react';

import StyledTitleHeader from './styles';

interface IProps {
   children: string;
}

const TitleHeader = ({ children }: IProps) => (
   <StyledTitleHeader>{children}</StyledTitleHeader>
);

export default TitleHeader;
