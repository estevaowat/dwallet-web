import React from 'react';

import AvatarImage from '../../atoms/AvatarImage';
import StyledProfile from './styles';

const Profile = () => (
   <StyledProfile>
      <span>Emily Smith</span>
      <AvatarImage />
   </StyledProfile>
);

export default Profile;
