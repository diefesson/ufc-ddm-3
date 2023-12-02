import User from "../models/User";

export default interface AuthService{
    auth(username: string, password: string): User | null;
}