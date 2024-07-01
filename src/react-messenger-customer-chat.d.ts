declare module 'react-messenger-customer-chat' {
    import { Component } from 'react';
  
    interface MessengerCustomerChatProps {
      pageId: string;
      appId: string;
    }
  
    class MessengerCustomerChat extends Component<MessengerCustomerChatProps> {}
  
    export default MessengerCustomerChat;
  }
  