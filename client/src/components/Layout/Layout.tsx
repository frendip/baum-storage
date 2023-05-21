import React, { FC, useEffect } from 'react';
import classes from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import ChatsSidebar from '../ChatsSidebar/ChatsSidebar';
import { useAppSelector } from '../../hooks/useAppSelector';
import Loading from '../Loading/Loading';
import { fetchMe } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getToken } from '../../store/slices/authSlice';

const Layout: FC = () => {
  const status = useAppSelector(state => state.user?.user?.id);
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchMe(token));
    }
  }, []);
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.container__chatSidebar}>
            <ChatsSidebar />
          </div>
          {!status
            ?
            <Loading />
            :
            <Outlet />
          }
        </div>
      </div>
    </>
  );
};

export default Layout;
