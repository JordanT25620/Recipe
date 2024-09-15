import User from "./User";

export default class AuthResponse extends Response {
    token: string;
    user: User;

    constructor(token: string, user: User) {
        super();
        this.token = token;
        this.user = user;
    }
}