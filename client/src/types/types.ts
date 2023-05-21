export interface ILogin {
  email: string;
  password: string;
}

export interface IRegistration extends ILogin {
  username: string;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}

export interface IMessage {
  id_msg: number;
  msg: string;
  id_user: number;
  date: Date;
}

export interface IChat {
  id_chat: number;
  chat_name: string;
  password: number;
}

export type tokenType = string;
