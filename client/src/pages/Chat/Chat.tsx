import React, { useEffect } from 'react';
import classes from './Chat.module.scss';
import Header from '../../components/Chat/Header/Header';
import Field from '../../components/Chat/Field/Field';
import Input from '../../components/Chat/Input/Input';
import io from 'socket.io-client';
import { useChat } from '../../hooks/useChat2';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getToken } from '../../store/slices/authSlice';
import { fetchMe } from '../../store/slices/userSlice';

const Chat = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchMe(token));
    }
  }, []);

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

  const { users, messages } = useChat();
  console.log(users, messages);

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
