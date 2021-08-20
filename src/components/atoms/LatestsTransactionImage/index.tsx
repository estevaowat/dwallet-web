import React from 'react';

import StyledLatestsTransactionImage from './styles';

interface IProps {
   source: string;
}

const LatestsTransactionImage = ({ source }: IProps) => (
   <StyledLatestsTransactionImage src={source} alt="Latest Transaction Icon" />
);

export default LatestsTransactionImage;
