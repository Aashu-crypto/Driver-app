import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {}, // Change to an object to store different parts of vehicle info
};

export const vehicleRegistrationSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    vehicleInfo: (state, action) => {
      // Merge new data with existing data
      state.data = {
        ...state.data,
        ...action.payload, // Merge the new payload into the existing state
      };
    },
  },
});

export const { vehicleInfo } = vehicleRegistrationSlice.actions;
export default vehicleRegistrationSlice.reducer;
