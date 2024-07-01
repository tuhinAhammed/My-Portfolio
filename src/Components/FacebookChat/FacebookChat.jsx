import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookChat = () => {
    console.log("okkkkk");
  return (
    <div>
      <FacebookProvider appId="460086386839803" chatSupport>
        <CustomChat pageId="153542789835248" minimized={true}/>
      </FacebookProvider>  
    </div>
  );
}

export default FacebookChat;
