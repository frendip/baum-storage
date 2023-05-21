import {tokenType} from '../types/types';
import {baseUrl} from "../utills/cofig";

export class UserService {
    static async getMe(token: tokenType) {
        const url = `${baseUrl}/lk/me`;
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}` || '',
            },
        });
    }
}