import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isLoading = true;
      state.currentUser = null;
      state.error = null;
    },

    userSuccess: (state, actions) => {
      state.isLoading = false;
      state.currentUser = actions.payload;
      state.error = null;
    },

    userFailure: (state, actions) => {
      state.isLoading = false;
      state.currentUser = null;
      state.error = actions.payload;
    },
  },
});

export const { userStart, userFailure, userSuccess } = userSlice.actions;

export default userSlice.reducer;
