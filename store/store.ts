"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import authSlice from "./slices/authSlice";
import jobSearch from "@/store/slices/jobSearch";

const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["error", "loading"],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: { auth: persistedReducer, jobs: jobSearch },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
