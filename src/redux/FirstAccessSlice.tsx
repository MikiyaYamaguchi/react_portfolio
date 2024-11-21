import { createSlice } from "@reduxjs/toolkit";

const firstAccessSlice = createSlice({
  name: "access",
  initialState: false,
  reducers: {
    changeAccess: (state) => {
      console.log(state);
      const data = sessionStorage.getItem("first accessed");
      if (data === "true") {
        return state;
      }
      sessionStorage.setItem("first accessed", "true");
      return true;
    },
  },
});

export const { changeAccess } = firstAccessSlice.actions;

export default firstAccessSlice.reducer;
