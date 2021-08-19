import React from 'react';

import EntryCard from '../../molecules/EntryCard';
import StyledEntries from './styles';

const Entries = () => (
   <StyledEntries>
      <EntryCard title="Expenses" />
      <EntryCard title="Expenses" />
      <EntryCard title="Expenses" />
      <EntryCard title="Expenses" />
      <EntryCard title="Expenses" />
   </StyledEntries>
);

export default Entries;
