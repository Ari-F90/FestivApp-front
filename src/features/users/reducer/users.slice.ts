import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

export type State = {
  userLogged: User;
  users: User[];
  user: User;
};

const initialState: State = {
  userLogged: {} as User,
  users: [],
  user: {} as User,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
      state.userLogged = action.payload;
    },
    login(state, action: PayloadAction<User>) {
      state.userLogged = action.payload;
    },
    logout(state) {
      state.userLogged = {} as User;
    },
  },
});

export const { register, login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
