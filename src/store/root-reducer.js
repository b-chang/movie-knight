import { combineReducers } from 'redux';
import moviesReducer from './movies/movies.reducer';
import tvReducer from './tv/tv.reducer';

export default combineReducers({
  moviesReducer,
  tvReducer
});