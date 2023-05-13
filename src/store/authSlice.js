import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialAuthState = {
  userName: "",
  userEmail: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    showName(state, action) {
      state.userName += action.payload;
    },
    showEmail(state, action) {
      state.userEmail += action.payload;
    },
    logIn(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
