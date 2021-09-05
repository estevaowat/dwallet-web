import React from 'react';

import TitleHeader from '../../atoms/TitleHeader/TitleHeader';
import TransactionRow from '../../molecules/TransactionRow/TransactionRow';
import './LatestsTransactions.scss';

const LatestsTransactions = () => {
   const info = {
      description: 'Qualquer coisa',
      date: 'Dec 29, 2:35 PM',
      id: 'ID: 123456',
      amount: '-$605.50',
   };
   return (
      <section className="latests-transactions">
         <TitleHeader text="Latests Transactions" />
         <ul className="latests-transactions-list">
            <TransactionRow info={info} />
            <TransactionRow info={info} />
            <TransactionRow info={info} />
            <TransactionRow info={info} />
            <TransactionRow info={info} />
         </ul>
      </section>
   );
};

export default LatestsTransactions;
