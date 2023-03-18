import { Festival } from "../models/festival";
import {
  loadCreator,
  loadOneCreator,
  addCreator,
  updateCreator,
  deleteCreator,
} from "./festivals.actions.creator";
import { festivalReducer } from "./festivals.reducer";

describe("Given the festival reducer", () => {
  describe("When we pass an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as Festival[];

      const action = { type: "" };

      const result = festivalReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });

  describe("When we pass the load all action", () => {
    test("Then, it should return the loaded festivals", () => {
      const result = festivalReducer([], loadCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the loadOne action", () => {
    test("Then, it should return this one thing", () => {
      const result = festivalReducer([], loadOneCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the create action", () => {
    test("Then, it should return the new thing created", () => {
      const mockCreate: Festival = {
        id: "2",
        name: "test",
      } as Festival;
      const result = festivalReducer([], addCreator(mockCreate));
      expect(result).toEqual([mockCreate]);
    });
  });

  describe("When we pass the update action", () => {
    test("Then, it should return the updated festival", () => {
      const mockState = [
        {
          id: "1",
          name: "test1",
        } as Festival,
        {
          id: "3",
          name: "test3",
        } as Festival,
      ];
      const payload: Festival = {
        id: "3",
        name: "test3",
      } as Festival;
      const result = festivalReducer(mockState, updateCreator(payload));
      expect(result).toEqual(mockState);
    });
  });
  describe("When we delete an object", () => {
    test("Then it should delete this festival", () => {
      let result = festivalReducer([], deleteCreator);
      expect(result).toEqual([]);
    });
  });
});
