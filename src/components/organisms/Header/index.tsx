import React from 'react';

import TitleHeader from '../../atoms/TitleHeader';
import Profile from '../../molecules/Profile';
import SearchSomething from '../../molecules/SearchSomething';
import StyledHeader from './styles';

const Header = () => (
   <StyledHeader>
      <TitleHeader>Overview</TitleHeader>
      <SearchSomething />
      <Profile />
   </StyledHeader>
);

export default Header;
