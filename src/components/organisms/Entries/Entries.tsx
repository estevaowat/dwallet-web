import React from 'react';

import EntryCard from '../../molecules/EntryCard/EntryCard';
import './Entries.scss';

const Entries = () => (
   <section className="entries">
      <EntryCard title="Expenses" amount="$5430,00" />
      <EntryCard title="Incomes" amount="$5430,00" />
   </section>
);

export default Entries;
