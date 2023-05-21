import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Layout from '../Layout/Layout';
import { privateRoutes, publicRoutes } from '../../router/routes';
import { getToken } from '../../store/slices/authSlice';

const AppRouter = () => {
  const isAuth = useAppSelector(getToken);
  return isAuth ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<div>123</div>} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<div>123</div>} />
    </Routes>
  );
};

export default AppRouter;
