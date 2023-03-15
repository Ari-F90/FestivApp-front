import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

export type State = {
  userLogged: User;
  users: User[];
};

const initialState: State = {
  userLogged: {} as User,
  users: [],
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
  },
});

export const { register, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
