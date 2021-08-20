import React from 'react';

import EntryCard from '../../molecules/EntryCard';
import StyledEntries from './styles';

const Entries = () => (
   <StyledEntries>
      <EntryCard title="Expenses" />
      <EntryCard title="Incomes" />
   </StyledEntries>
);

export default Entries;
