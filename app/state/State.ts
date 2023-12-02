import User from "../models/User";

export interface RootState {
  user: User | null;
}

export const initialState: RootState = {
  user: null,
};
