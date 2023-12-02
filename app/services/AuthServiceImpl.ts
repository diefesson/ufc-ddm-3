import { signInWithEmailAndPassword } from "firebase/auth";

import { fbAuth } from "../firebase/App";
import User from "../models/User";
import AuthService from "./AuthService";

class AuthServiceImpl implements AuthService {
  async auth(email: string, password: string): Promise<User> {
    try {
      const { user } = await signInWithEmailAndPassword(
        fbAuth,
        email,
        password
      );
      return { name: user.email!, email: user.email!, picture: user.photoURL };
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthServiceImpl();
