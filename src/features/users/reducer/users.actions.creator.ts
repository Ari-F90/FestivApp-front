import { createAction } from "@reduxjs/toolkit";
import { usersActions } from "./users.actions.types";
import { User } from "../models/user";

export const loadCreator = createAction<User[]>(usersActions.load);
export const addCreator = createAction<User>(usersActions.add);
export const updateCreator = createAction<User>(usersActions.update);
export const deleteCreator = createAction<User["id"]>(usersActions.delete);
