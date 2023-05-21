import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout: FC = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
