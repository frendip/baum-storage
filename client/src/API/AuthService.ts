import {baseUrl} from "../utills/cofig";

export class AuthService {
    static async getLogin(email: string, password: string) {
        const url = `${baseUrl}/auth/login`;
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
    }

    static async getRegistration(
        username: string,
        email: string,
        password: string,
    ) {
        const url = `${baseUrl}/auth/registration`;
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, email, password
            }),
        });
    }
}
