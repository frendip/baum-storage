import React, { FC } from 'react';

interface MessageProps {
  Message: string;
  status: boolean;
  owner_id: string;
  owner_avatar: string;
  dateTime: string;
}

const Message: FC<MessageProps> = (props) => {
  return <div></div>;
};

export default Message;