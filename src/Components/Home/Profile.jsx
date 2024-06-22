import React from 'react';
import ProfileImg from "../../assets/profile.png";
import ProfileButton from './ProfileButton';
import BoxAction from './BoxAction';
import "../Home/Profile.css";

const Profile = () => {
  const text = "Muhammad Irshad - Creative UX/UI Designer - ";
  const mainText = text.split(""); // Split the text into an array of characters

  return (
    <div className="">
      <div className="profileImageWrapper relative w-[200px] h-[200px] flex justify-center items-center m-auto">
        <div className="profileImage bg-theme w-[200px] h-[200px] rounded-full absolute overflow-hidden ">
          <img src={ProfileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <ProfileButton />
      <BoxAction title="Biography" link="/about" />
    </div>
  );
};

export default Profile;
