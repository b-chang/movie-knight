import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_API_KEY } = process.env;
const generateUrl = (type, category, page) => `https://api.themoviedb.org/3/${type}/${category}?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;

const addPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async (_, thunkAPI) => {
    const response = await axios.get(generateUrl('movie', 'popular', '2'));
    console.log('thunkAPI', response);
    return response.data;
  }
);

// const addPopularMovies = (type, payload) => async (dispatch, getState) => {
//   const response = await axios.get(generateUrl('movie', 'popular', '2'));
//   dispatch({
//     type: 'FETCH_POPULAR_MOVIES',
//     payload: response.data
//   });
// };

const addTopRatedMovies = (type, payload) => async (dispatch, getState) => {
  const response = await axios.get(generateUrl('movie', 'top_rated', '3'));
  dispatch({
    type: 'FETCH_TOP_RATED_MOVIES',
    payload: response.data
  });
};

const addTrendingMovies = (type, payload) => async (dispatch, getState) => {
  const response = await axios.get(generateUrl('trending', 'movie/day', '1'));
  console.log('RETRIEVING MOVIES', response.data);
  dispatch({
    type: 'FETCH_TRENDING_MOVIES',
    payload: response.data
  });
};

export {
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies
};