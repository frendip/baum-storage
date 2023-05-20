import React from 'react';
import classes from './ChatLayout.module.scss';
import { Outlet } from 'react-router-dom';

const ChatLayout = () => {
  return (
    <>
      <div className={classes.profileLayout}>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
