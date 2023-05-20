import React from 'react';
import classes from './ChatLayout.module.scss';
import NavBar from '../UI/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const ChatLayout = () => {
  return (
    <>
      <div className={classes.profileLayout}>
        <NavBar />
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
