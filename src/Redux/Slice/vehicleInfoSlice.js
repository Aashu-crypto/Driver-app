import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const vehicleInfoSlice = createSlice({
  name: 'vehicleInfo',
  initialState,
  reducers: {
    vehicleInfo: (state, action) => {
      state.data = action.payload
    },
  },
});

export const {vehicleInfo} = vehicleInfoSlice.actions;

export default vehicleInfoSlice.reducer;
