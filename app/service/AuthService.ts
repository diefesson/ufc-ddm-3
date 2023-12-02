import User from "../model/User";

export default interface AuthService{
    auth(username: string, password: string): User | null;
}