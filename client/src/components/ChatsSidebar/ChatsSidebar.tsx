import React from 'react';
import classes from './ChatsSidebar.module.scss';
import Header from './Header/Header';
import Item from './Item/Item';
import { SearchInput } from '../UI/Input/Input';

const ChatsSidebar = () => {
  return (
    <div className={classes.chatsSidebar}>
      <div className={classes.chatsSidebar__header}>
        <Header />
        <SearchInput />
      </div>
      <div className={classes.chatsSidebar__list}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default ChatsSidebar;
