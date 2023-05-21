import { baseUrl } from '../utills/cofig';
import { useEffect, useState } from 'react';
import { IChat } from '../types/types';
import io from 'socket.io-client';
import { useAppSelector } from './useAppSelector';

const SERVER_URL = baseUrl;

export const useChat = () => {
  const userId = useAppSelector((state) => state.user?.user?.id);
  const [chats, setChats] = useState<IChat[]>([]);
  console.log(userId);
  const [socket] = useState(() => io(SERVER_URL, { query: { userID: userId } }));

  useEffect(() => {
    socket.emit('chat:get');
    socket.on('chats', (chats) => {
      setChats(chats);
    });
    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socket.disconnect();
    };
  }, []);

  return chats;
};
