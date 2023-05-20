import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Registration from '../pages/Auth/Registration';

interface IRouter {
  path: string;
  element: JSX.Element;
}

export const privateRoutes: IRouter[] = [{ path: '/', element: <div>123</div> }];

export const publicRoutes: IRouter[] = [
  { path: '/', element: <Navigate to={'/login'} /> },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
];
