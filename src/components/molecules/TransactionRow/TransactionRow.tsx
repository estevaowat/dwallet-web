import React from 'react';
import { FiCoffee } from 'react-icons/fi';

import './TransactionRow.scss';

interface IProps {
   info: {
      description: string;
      date: string;
      id: string;
      amount: string;
   };
}

const TransactionRow = ({ info }: IProps) => {
   const { description, date, id, amount } = info;

   return (
      <li className="transaction-row">
         <FiCoffee />
         <p className="transaction-description">{description}</p>
         <p className="transaction-date">{date}</p>
         <p className="transaction-id">{id}</p>
         <p className="transaction-amount">{amount}</p>
      </li>
   );
};

export default TransactionRow;
