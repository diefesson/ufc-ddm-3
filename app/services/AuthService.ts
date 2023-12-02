import User from "../models/User";

export default interface AuthService{
    auth(email: string, password: string): Promise<User>;
}