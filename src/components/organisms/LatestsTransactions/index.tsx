import React from 'react';

import TitleHeader from '../../atoms/TitleHeader';
import LatestTransactionRow from '../../molecules/LatestsTransactionRow';
import {
   LatestsTransactions as StyledLatestsTransactions,
   LatestsTransactionsGrid,
} from './styles';

const LatestsTransactions = () => (
   <StyledLatestsTransactions>
      <TitleHeader>Latests Transactions</TitleHeader>
      <LatestsTransactionsGrid>
         <LatestTransactionRow description="Spotify asijdjd9adha dad a da9jd9ajdas8djs" />
         <LatestTransactionRow description="Spotify" />
         <LatestTransactionRow description="Spotify" />
         <LatestTransactionRow description="Spotify" />
         <LatestTransactionRow description="Spotify" />
         <LatestTransactionRow description="Spotify" />
      </LatestsTransactionsGrid>
   </StyledLatestsTransactions>
);

export default LatestsTransactions;
