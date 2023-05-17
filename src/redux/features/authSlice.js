import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    handleLogin: (state) => {
      state.isLogged = true;
    },
    handleLogout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
