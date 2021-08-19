import React from 'react';

import Entries from '../../organisms/Entries';
import Header from '../../organisms/Header';
import StyledHome from './styles';

const Home = () => (
   <StyledHome>
      <Header />
      <Entries />
      {/* 
      <div>
         <LatestsTransactions />
         <StatiticsByCategory />
      </div> */}
   </StyledHome>
);

export default Home;
