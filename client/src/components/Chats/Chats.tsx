import React from 'react';
import classes from './Chats.module.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageField from '../MessageField/MessageField';
import MessageInput from '../MessageInput/MessageInput';

const Chats = () => {
  return (
    <div className={classes.wrapper}>
      <ChatHeader />
      <MessageField />
      <MessageInput />
    </div>
  );
};

export default Chats;
