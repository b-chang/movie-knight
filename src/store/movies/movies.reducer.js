import { createSlice } from '@reduxjs/toolkit';
import { addPopularMovies } from './movies.actions';

const INITIAL_STATE = {};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPopularMovies.fulfilled, (state, action) => {
        // action is inferred correctly here if using TS
        state.entities.push(action.payload);
      })
      .addDefaultCase((state, action) => {});
  }
});

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const moviesTopRatedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TOP_RATED_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
console.log('test"')

const moviesTrendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TRENDING_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export {
  moviesSlice,
  moviesReducer,
  moviesTopRatedReducer,
  moviesTrendingReducer
};