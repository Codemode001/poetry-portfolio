import { configureStore } from "@reduxjs/toolkit";
import updateData from "../slices/slices";

export const store = configureStore({
  reducer: {
    theme: updateData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
