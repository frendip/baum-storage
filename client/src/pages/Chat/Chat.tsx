import React from 'react';
import classes from './Chat.module.scss';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageField from '../../components/MessageField/MessageField';
import MessageInput from '../../components/MessageInput/MessageInput';

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
