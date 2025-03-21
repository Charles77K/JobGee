"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { tokenService } from "@/lib/axiosHelper";

const initialState = {
  user: null,
  error: null,
  token: tokenService.getAccessToken(),
  refreshToken: tokenService.refreshToken(),
  isAuthenticated: !!tokenService.getAccessToken(),
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
      state.token = action.payload.access;
      state.refreshToken = action.payload.refresh;
      state.isAuthenticated = !!state.token;

      // Store in localStorage
      tokenService.saveToken(action.payload.access, action.payload.refresh);
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.error = null;
      state.token = undefined;
      state.refreshToken = undefined;
      state.isAuthenticated = false;
      state.loading = false;

      // Clear localStorage
      tokenService.clearTokens();
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
