import { baseUrl } from '../utills/cofig';
import { useRef, useState } from 'react';
import { IMessage, IUser } from '../types/types';

const SERVER_URL = baseUrl;

export const useChat = (room_id: number) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [messages, setMessages] = useState<IMessage[]>([]);

  const socketRef = useRef(null);
};
