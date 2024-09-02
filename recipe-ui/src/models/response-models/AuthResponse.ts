import User from "./User";

export default class AuthResponse {
    token: string;
    user: User;

    constructor(token: string, user: User) {
        this.token = token;
        this.user = user;
    }
}