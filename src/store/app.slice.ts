import { AppState,Theme } from '@/types/interface';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState: AppState = {
  theme: null,
  submitValue:''
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      document.documentElement.setAttribute('data-theme', action.payload);
    },
    formValues: (state, action: PayloadAction<Theme>) => {
    // console.log(action.payload,"redux")
    let value=state.submitValue=action.payload
console.log(value,"llll");

    }
  }
});

export const { setTheme,formValues } = appSlice.actions;
export default appSlice.reducer;
