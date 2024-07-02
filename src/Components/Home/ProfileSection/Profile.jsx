

import React from 'react';
import ProfileImg from "../../../assets/profile.png";
import ProfileButton from '../ProfileButton';
import BoxAction from '../BoxAction';
import CircleImage from './CircleImage';


const Profile = () => {

  return (
    <div className="">
      <div className=''>
      <CircleImage/>
      </div>
      <ProfileButton />
      <BoxAction title="Biography" link="/about" />
    </div>
  );
};

export default Profile;
