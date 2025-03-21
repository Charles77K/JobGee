"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  user: null,
  error: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUser: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // Store in localStorage
      localStorage.setItem("token", action.payload.token);
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.error = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
    updateToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

// Export actions and reducer
export const { authRequest, setUser, setError, clearAuth, updateToken } =
  authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
