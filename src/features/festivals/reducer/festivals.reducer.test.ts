import { festivalReducer } from "./festivals.reducer";
import * as ac from "./festivals.actions.creator";
import { Festival } from "../models/festival";

describe("Given the festivalReducer", () => {
  let initialState: Festival[] = [{ id: "1", name: "festival" } as Festival];

  describe("When the loadCreator method is called", () => {
    test("Then it should return the array of festivals", () => {
      const festivals: Festival[] = [
        {
          id: "1",
          name: "Festival1",
          city: "Barcelona",
        } as Festival,
      ];
      const action = ac.loadCreator(festivals);
      const state = festivalReducer(initialState, action);
      expect(state).toEqual(festivals);
    });
  });

  describe("When the loadOneCreator method is called", () => {
    test("Then it should return the festival", () => {
      const festival2: Festival = {
        id: "2",
        name: "Festival2",
        city: "Madrid",
      } as Festival;
      const action = ac.loadOneCreator(festival2);
      const state = festivalReducer(initialState, action);
      expect(state).toEqual({ ...initialState, payload: festival2 });
    });
  });

  describe("When the addCreator method is called", () => {
    test("Then it should create a new festival", () => {
      const festival3: Festival = {
        name: "Festival 3",
        city: "Munich",
      } as Festival;
      const action = ac.addCreator(festival3);
      const state = festivalReducer(initialState, action);
      expect(state).toContainEqual(action.payload);
    });
  });
  describe("When the updateCreator method is called", () => {
    test("Then, it should return the initial state", () => {
      const mockState = [
        {
          id: "1",
          name: "festival1",
        } as Festival,
        {
          id: "3",
          name: "festival3",
        } as Festival,
      ];
      const payload: Festival = {
        id: "3",
        name: "festival3",
      } as Festival;
      const result = festivalReducer(mockState, ac.updateCreator(payload));
      expect(result).toEqual(mockState);
    });
  });

  describe("When the deleteCreator method is called", () => {
    test("Then it should delete the festival", () => {
      const action = ac.deleteCreator("1");
      const state = festivalReducer(initialState, action);
      expect(state).toEqual([]);
    });
    test("Then it should not delete the festival, if it has different id", () => {
      const action = ac.deleteCreator("2");
      const state = festivalReducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
  describe("When the default case method is called", () => {
    test("Then it should return the initial state", () => {
      const action = { type: "" };
      const state = festivalReducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
});
