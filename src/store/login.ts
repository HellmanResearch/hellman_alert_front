import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) =>  {
          localStorage.setItem('login', JSON.stringify({ ...state, ...action.payload }))
          return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;