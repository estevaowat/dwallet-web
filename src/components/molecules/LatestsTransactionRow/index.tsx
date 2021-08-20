import React from 'react';

import LatestsTransactionImage from '../../atoms/LatestsTransactionImage';
import StyledLatestTransactionRow from './styles';

interface IProps {
   description: string;
}
const LatestTransactionRow = ({ description }: IProps) => (
   <StyledLatestTransactionRow>
      <LatestsTransactionImage source="https://img-premium.flaticon.com/png/512/2936/premium/2936758.png?token=exp=1629415599~hmac=5f3b8a844530cebd7b106e802a4b82e9" />
      <p>{description}</p>
      <p>Dec 29, 2:35 PM</p>
      <p>ID: 123456</p>
      <p>- $605.50</p>
   </StyledLatestTransactionRow>
);

export default LatestTransactionRow;
