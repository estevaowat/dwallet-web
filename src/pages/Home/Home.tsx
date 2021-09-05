import React from 'react';

import Entries from '../../components/organisms/Entries/Entries';
import LatestsTransactions from '../../components/organisms/LatestsTransactions/LatestsTransactions';
import StatiticsByCategory from '../../components/organisms/StatiticsByCategory';
import './Home.scss';

const Home = () => (
   <main className="home-page">
      <Entries />
      <div>
         <LatestsTransactions />

         <StatiticsByCategory />
      </div>
   </main>
);

export default Home;
