import { combineReducers } from 'redux';
import {
  moviesReducer, moviesTopRatedReducer, moviesTrendingReducer, moviesSlice
} from './movies/movies.reducer';

console.log(moviesSlice);
const { reducer: movies } = moviesSlice;

export default combineReducers({
  movies,
  moviesReducer,
  moviesTopRatedReducer,
  moviesTrendingReducer
});