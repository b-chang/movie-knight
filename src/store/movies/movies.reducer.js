import { createSlice } from '@reduxjs/toolkit';
import { addPopularMovies, addTopRatedMovies, addTrendingMovies } from './movies.actions';

const INITIAL_STATE = {
};

const moviesSliceConfig = {
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {
    addPopularMovies,
    addTopRatedMovies,
    addTrendingMovies
  }
};

export const moviesSlice = createSlice(moviesSliceConfig);
export default moviesSlice.reducer;