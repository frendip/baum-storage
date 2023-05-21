import { baseUrl } from '../utills/cofig';
import { useEffect, useState } from 'react';
import { IMessage, IUser } from '../types/types';
import io from 'socket.io-client';

const SERVER_URL = baseUrl;

export const useChat = (room_id: number) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [socket] = useState(() => io(SERVER_URL, { query: { roomID: room_id } }));

  useEffect(() => {
    socket.emit('user:add');
    socket.on('users', (users) => {
      setUsers(users);
    });

    socket.emit('message:get');
    socket.on('messages', (messages) => {
      setMessages(messages);
    });
    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socket.disconnect();
    };
  }, []);

  return { users, messages };
};
