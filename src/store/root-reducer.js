import { combineReducers } from 'redux';
import { moviesReducer, moviesTopRatedReducer, moviesTrendingReducer } from './movies/movies.reducer';

export default combineReducers({
  moviesReducer,
  moviesTopRatedReducer,
  moviesTrendingReducer
});