import React from 'react';
import classes from './ChatLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const ChatLayout = () => {
  return (
    <>
      <div className={classes.chatLayout}>
        <div className={classes.content}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
