import React from 'react';

import StyledTitle from './styles';

interface IProps {
   children: string;
}

const Title = ({ children }: IProps) => <StyledTitle>{children}</StyledTitle>;

export default Title;
