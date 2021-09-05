import React from 'react';

import './EntryCard.scss';

interface IProps {
   title: string;
   amount: string;
}
const EntryCard = ({ title, amount }: IProps) => (
   <div className="entry-card">
      <span className="entry-card-title">{title}</span>
      <div className="entry-card-amount">
         {amount} <span className="entry-card-amount-text">on this week</span>
      </div>
      <div>SOME GRAPH ABOUT MY EXPENSES</div>
   </div>
);

export default EntryCard;
