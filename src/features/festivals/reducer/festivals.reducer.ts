import { createReducer } from "@reduxjs/toolkit";
import { Festival } from "../models/festival";
import * as ac from "./festivals.actions.creator";

const initialState: Festival[] = [];

export const festivalReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadByMusicCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadOneCreator, (state, { payload }) => {
    return { ...state, payload };
  });

  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
