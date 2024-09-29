import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

export const driverProfileSlice = createSlice({
  name: "DriverProfile",
  initialState,
  reducers: {
    driverProfile: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { driverProfile } = driverProfileSlice.actions;
export default driverProfileSlice.reducer;
