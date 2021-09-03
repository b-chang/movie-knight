import { createSlice } from '@reduxjs/toolkit';
import addPopularTV from './tv.actions';

const INITIAL_STATE = {
};

const tvSliceConfig = {
  name: 'tv',
  initialState: INITIAL_STATE,
  reducers: {
    addPopularTV
  }
};

export const tvSlice = createSlice(tvSliceConfig);
export default tvSlice.reducer;