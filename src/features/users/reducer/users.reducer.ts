import { createReducer } from "@reduxjs/toolkit";
import { User } from "../models/user";
import * as ac from "./users.actions.creator";

const initialState: User[] = [];

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadOneCreator, (state, { payload }) =>
    state.filter((item) => item.id === payload.id)
  );

  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
