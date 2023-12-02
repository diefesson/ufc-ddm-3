import User from "../model/User";
import AuthService from "./AuthService";

const credentials = [
  { username: "admin", password: "12345678" },
  { username: "user", password: "12345678" },
];

class AuthServiceImpl implements AuthService {
  auth(username: string, password: string): User | null {
    const user = credentials.find(
      (c) =>
        c.username.toLowerCase() == username.toLowerCase() &&
        c.password == password
    );
    return user || null; // Converte de ´User | undefined´ para ´User | null´
  }
}

export default new AuthServiceImpl();
