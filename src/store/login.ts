import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
      login: (state, action) => {
          let newState = { ...state, ...action.payload }
          delete newState.cancel;
          if (action.payload.cancel) { 
              newState= {}
          }
          localStorage.setItem('login', JSON.stringify(newState))
          return newState;
    },
  },
  
});

export default userSlice.reducer;