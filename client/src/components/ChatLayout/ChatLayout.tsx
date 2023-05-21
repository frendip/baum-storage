import React from 'react';
import classes from './ChatLayout.module.scss';
import { Outlet } from 'react-router-dom';
import ChatsSidebar from '../ChatsSidebar/ChatsSidebar';

const ChatLayout = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.container__chatSidebar}>
            <ChatsSidebar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
