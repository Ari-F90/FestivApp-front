import { userReducer } from "./users.reducer";
import * as ac from "./users.actions.creator";
import { User } from "../models/user";
import {
  addCreator,
  loadCreator,
  updateCreator,
} from "./users.actions.creator";

describe("Given the userReducer", () => {
  const mockUser1 = {
    id: "1",
    name: "test1",
  } as User;

  const mockUser2 = {
    id: "2",
    name: "test2",
  } as User;

  const users = [mockUser1, mockUser2];
  describe("When we pass an empty action, and the methods load, create, update and delete", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as User[];

      const action = { type: "" };

      const result = userReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });
  test("Then, it should return the load things", () => {
    const result = userReducer([], loadCreator);
    expect(result).toEqual([]);
  });

  test("Then, it should return the new thing created", () => {
    const mockCreate: User = {
      id: "2",
      name: "user2",
    } as User;
    const result = userReducer([], addCreator(mockCreate));
    expect(result).toEqual([mockCreate]);
  });
  test("Then, it should return the initial state", () => {
    const mockState = [
      {
        id: "1",
        name: "user1",
      } as User,
      {
        id: "3",
        name: "user3",
      } as User,
    ];
    const payload = {
      id: "3",
      name: "user3",
    } as User;
    const result = userReducer(mockState, updateCreator(payload));
    expect(result).toEqual(mockState);
  });

  test("Then it should delete the object", () => {
    expect(userReducer(users, ac.deleteCreator(mockUser1.id))).toEqual([
      mockUser2,
    ]);
  });
});
