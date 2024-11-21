import { configureStore } from "@reduxjs/toolkit";
import AccessReducer from "./FirstAccessSlice";

export const store = configureStore({
  reducer: {
    access: AccessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
