import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Registration from '../pages/Auth/Registration';
import Chats from '../components/Chats/Chats';

interface IRouter {
  path: string;
  element: JSX.Element;
}

export const privateRoutes: IRouter[] = [
  { path: '/', element: <Chats /> },
  { path: '/:id', element: <Chats /> },
];

export const publicRoutes: IRouter[] = [
  { path: '/', element: <Navigate to={'/login'} /> },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
];
