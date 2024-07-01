'use client'
import React from 'react';
import MessengerChatPlugin from 'react-messenger-chat-plugin';

const FacebookChat = () => {
    console.log("okkkkk");
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <MessengerChatPlugin
        pageId="153542789835248"
        appId="460086386839803"
      />
    </div>
  );
}

export default FacebookChat;
