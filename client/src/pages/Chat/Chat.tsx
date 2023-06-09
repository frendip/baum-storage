import React, { useEffect } from 'react';
import classes from './Chat.module.scss';
import Header from '../../components/Chat/Header/Header';
import Field from '../../components/Chat/Field/Field';
import Input from '../../components/Chat/Input/Input';
import io from 'socket.io-client';

const Chat = () => {
  const socket = io('http://localhost:4000', { query: { roomID: 1 } });

  const sendMess = () => {
    socket.emit('message:add', { id_user: 1, msg: '123eee' });
    alert(123);
  };
  useEffect(() => {
    socket.on('messages', (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className={classes.wrapper}>
      <button onClick={sendMess}>clickme</button>
      <Header />
      <Field />
      <Input />
    </div>
  );
};

export default Chat;
