import React, {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Registration from '../pages/Auth/Registration';
import Chat from '../pages/Chat/Chat';
import EmptyChat from "../pages/EmptyChat/EmptyChat";

interface IRouter {
    path: string;
    element: JSX.Element;
}

export const privateRoutes: IRouter[] = [
    {path: '/', element: <EmptyChat/>},
    {path: '/:id', element: <Chat/>},
];

export const publicRoutes: IRouter[] = [
    {path: '/', element: <Navigate to={'/login'}/>},
    {path: '/login', element: <Login/>},
    {path: '/registration', element: <Registration/>},
];
