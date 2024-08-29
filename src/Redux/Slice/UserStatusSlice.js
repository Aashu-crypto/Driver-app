import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "Offline",
};

export const userStatusSlice = createSlice({
  name: "UserStatus",
  initialState,
  reducers: {
    UserStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { UserStatus } = userStatusSlice.actions;
export default userStatusSlice.reducer;
