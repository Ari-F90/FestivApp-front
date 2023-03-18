import { createAction } from "@reduxjs/toolkit";
import { Festival } from "../models/festival";
import { festivalsActions } from "./festival.actions.types";

export const loadCreator = createAction<Festival[]>(festivalsActions.load);
export const loadOneCreator = createAction<Festival>(festivalsActions.loadOne);
export const addCreator = createAction<Festival>(festivalsActions.add);
export const updateCreator = createAction<Festival>(festivalsActions.update);
export const deleteCreator = createAction<Festival["id"]>(
  festivalsActions.delete
);
