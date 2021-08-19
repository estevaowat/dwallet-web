import React from 'react';

import {
   StyledEntryCard,
   AmountTextEntryCard,
   TitleHeaderEntryCard,
   AmountEntryCard,
   Graph,
} from './styles';

interface IProps {
   title: string;
}
const EntryCard = ({ title }: IProps) => (
   <StyledEntryCard>
      <TitleHeaderEntryCard>{title}</TitleHeaderEntryCard>
      <AmountEntryCard>
         $5430,00 <AmountTextEntryCard>on this week</AmountTextEntryCard>
      </AmountEntryCard>
      <Graph>SOME GRAPH ABOUT MY EXPENSES</Graph>
   </StyledEntryCard>
);

export default EntryCard;
