import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 0,
};
export const NumberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    number: (state, action) => {
      state.number = action.payload;
    },
  },
});
export const { number } = NumberSlice.actions;
export default NumberSlice.reducer;
