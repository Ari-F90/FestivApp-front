import { User } from "../models/user";
import {
  loadCreator,
  loadOneCreator,
  addCreator,
  updateCreator,
  deleteCreator,
} from "./users.actions.creator";
import { userReducer } from "./users.reducer";

describe("Given the user reducer", () => {
  describe("When we pass an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as User[];

      const action = { type: "" };

      const result = userReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });

  describe("When we pass the load action", () => {
    test("Then, it should return the load things", () => {
      const result = userReducer([], loadCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the loadOne action", () => {
    test("Then, it should return this one user", () => {
      const result = userReducer([], loadOneCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the create action", () => {
    test("Then, it should return the new user created", () => {
      const mockCreate = {
        id: "a",
        name: "user1",
      } as User;
      const result = userReducer([], addCreator(mockCreate));
      expect(result).toEqual([mockCreate]);
    });
  });

  describe("When we pass the update action", () => {
    test("Then, it should return the initial state", () => {
      const mockState = [
        {
          id: "b",
          name: "user2",
        },
        {
          id: "c",
          name: "user3",
        },
      ] as User[];
      const payload: User = {
        id: "c",
        name: "user3",
      } as User;
      const result = userReducer(mockState, updateCreator(payload));
      expect(result).toEqual(mockState);
    });
  });
  describe("When we delete an object", () => {
    test("Then it should delete this user", () => {
      let result = userReducer([], deleteCreator);
      expect(result).toEqual([]);
    });
  });
});
