import React from 'react';
import classes from './Chats.module.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageField from '../MessageField/MessageField';
import MessageInput from '../MessageInput/MessageInput';
import { useParams } from 'react-router-dom';

const Chats = () => {
  const params = useParams();
  console.log('params = ', params);
  return (
    <div className={classes.wrapper}>
      {!params.id ? (
        <div>пусто</div>
      ) : (
        <>
          <ChatHeader />
          <MessageField />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default Chats;
