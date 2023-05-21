export interface ILogin {
    email: string;
    password: string;
}

export interface IRegistration extends ILogin {
    username: string;
}

export interface IPromiseAuth {
    type: string;
    payload: {
        token?: tokenType;
    };
}

export interface IUser {
    id: string;
    email: string;
    username: string;


}

export type tokenType = string;
