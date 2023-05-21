import React from 'react';
import classes from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import ChatsSidebar from '../ChatsSidebar/ChatsSidebar';

const Layout = () => {
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

export default Layout;
