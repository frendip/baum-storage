import { baseUrl } from '../utills/cofig';
import { useEffect, useState } from 'react';
import { IMessage, IUser } from '../types/types';
import io from 'socket.io-client';
import { useAppSelector } from './useAppSelector';

const SERVER_URL = baseUrl;

export const useChat = () => {
  const userId = useAppSelector((state) => state.user?.user?.id);
  const [users, setUsers] = useState<IUser[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [socket] = useState(() => io(SERVER_URL, { query: { userID: userId } }));

  useEffect(() => {
    socket.emit('user:add', { userID: Number(userId) });
    socket.on('users', (users) => {
      setUsers(users);
    });

    socket.emit('chat:get');
    socket.on('chats', (chats) => {
      setMessages(messages);
    });
    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socket.disconnect();
    };
  }, []);

  return { users, messages };
};
