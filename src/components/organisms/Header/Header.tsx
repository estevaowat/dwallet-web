import React from 'react';

import TitleHeader from '../../atoms/TitleHeader/TitleHeader';
import Profile from '../../molecules/Profile/Profile';
import ToggleTheme from '../../molecules/ToggleTheme/ToggleTheme';
import './Header.scss';

const Header = () => (
   <header className="header">
      <TitleHeader text="Overview" />
      <ToggleTheme />
      <Profile />
   </header>
);

export default Header;
