import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

export type State = {
  userLogged: User;
  users: User[];
  token: string | null;
};

const initialState: State = {
  userLogged: {} as User,
  users: [],
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<User>) {
      state.userLogged = action.payload;
    },
    logout(state) {
      state.users = [];
    },
  },
});

export const { register, login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
