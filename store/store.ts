"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: { auth: authSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
