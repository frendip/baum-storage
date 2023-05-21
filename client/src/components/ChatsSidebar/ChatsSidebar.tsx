import React from 'react';
import classes from './ChatsSidebar.module.scss';
import Header from './Header/Header';
import Item from './Item/Item';

const ChatsSidebar = () => {
  return (
    <div className={classes.chatsSidebar}>
      <Header />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ChatsSidebar;
