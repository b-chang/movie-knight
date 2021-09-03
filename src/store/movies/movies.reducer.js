import { createSlice } from '@reduxjs/toolkit';
import { addMovies, addTopRatedMovies, addTrendingMovies } from './movies.actions';

const INITIAL_STATE = {
  movies: {}
};

const moviesSliceConfig = {
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {
    addMovies,
    addTopRatedMovies,
    addTrendingMovies
  }
};

export const moviesSlice = createSlice(moviesSliceConfig);
export default moviesSlice.reducer;