import React from 'react';

import AvatarImage from '../../atoms/AvatarImage/AvatarImage';
import './Profile.scss';

const Profile = () => (
   <section className="profile">
      <span className="profile-name">Emily Smith</span>
      <AvatarImage />
   </section>
);

export default Profile;
