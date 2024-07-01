import React from 'react';
import { MessengerChat } from 'react-facebook-messenger-plugin';
const FacebookChat = () => {
    console.log("okkkkk");
  return (
    <div className="z-[99999] py-6 ">
      <h1>Welcome to My Website</h1>
      <MessengerChat
        pageId="153542789835248"
        appId="460086386839803D"
        themeColor="#6699cc"
        loggedInGreeting="Hi! How can we help you?"
        loggedOutGreeting="Hi! Please log in to chat with us."
      />
    </div>
  );
}

export default FacebookChat;
