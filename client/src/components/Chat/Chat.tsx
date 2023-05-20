import React from 'react';
import classes from './Chat.module.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageField from '../MessageField/MessageField';
import MessageInput from '../MessageInput/MessageInput';

const Chat = () => {
  return (
    <div className={classes.wrapper}>
      <ChatHeader />
      <MessageField />
      <MessageInput />
    </div>
  );
};

export default Chat;
