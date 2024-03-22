import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  errorMessage: string; // Corrected property name
  loading: boolean;
}

const initialState = {
  currentUser: null,
  loading: false,
  errorMessage: null, // Change this to errorMessage
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    signInError: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInError } = userSlice.actions;
export default userSlice.reducer;
