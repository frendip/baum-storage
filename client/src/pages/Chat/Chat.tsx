import React from 'react';
import classes from './Chat.module.scss';
import Header from '../../components/Chat/Header/Header';
import Field from '../../components/Chat/Field/Field';
import Input from '../../components/Chat/Input/Input';

const Chat = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Field />
      <Input />
    </div>
  );
};

export default Chat;
