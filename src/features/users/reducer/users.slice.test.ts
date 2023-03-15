import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { userReducer, State } from "../reducer/users.slice";

const mockUser = {
  id: "3",
  username: "test",
  email: "test@",
  password: "12",
};
const initialState: State = {
  userLogged: {} as User,
  users: [],
};

describe("Given the userSlice", () => {
  describe("When the register method is called", () => {
    test("Then it should return the mockUser in an array", () => {
      const registerAction = {
        type: "user/register",
        payload: mockUser,
      };
      const mockReducer = userReducer(initialState, registerAction);
      expect(mockReducer.users).toEqual([mockUser]);
    });
  });
  describe("When the login method is called", () => {
    test("Then it should return the mock", () => {
      const loginAction = {
        type: "user/login",
        payload: mockUser,
      };
      const mockReducer = userReducer(initialState, loginAction);
      expect(mockReducer.userLogged).toBe(mockUser);
    });
  });
});
