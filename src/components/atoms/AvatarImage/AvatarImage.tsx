import React from 'react';

import KakashiAvatar from '../../../assets/avatar.png';
import './AvatarImage.scss';

const AvatarImage = () => (
   <img className="avatar-image" src={KakashiAvatar} alt="Avatar" />
);

export default AvatarImage;
