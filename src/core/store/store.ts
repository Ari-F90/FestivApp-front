import { configureStore } from "@reduxjs/toolkit";
import { festivalReducer } from "../../features/festivals/reducer/festivals.reducer";
import { userReducer } from "../../features/users/reducer/users.slice";

export const store = configureStore({
  reducer: { users: userReducer, festivals: festivalReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
