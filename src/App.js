import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moviesSlice } from './store/movies/movies.reducer';
import './App.scss';
import HomePage from './pages/home-page/home-page.component';
import './sass/base/base.styles.scss';

const { REACT_APP_API_KEY } = process.env;

const App = () => {
  const dispatch = useDispatch();

  const generateUrl = (type, category, page) => `https://api.themoviedb.org/3/${type}/${category}?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const fetchMovies = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    fetchMovies(generateUrl('movie', 'popular', '2'))
      .then((movies) => dispatch(moviesSlice.actions.addMovies(movies)));
  });

  useEffect(() => {
    fetchMovies(generateUrl('movie', 'top_rated', '3'))
      .then((movies) => dispatch(moviesSlice.actions.addTopRatedMovies(movies)));
  });

  useEffect(() => {
    fetchMovies(generateUrl('trending', 'movie/day', '1'))
      .then((movies) => dispatch(moviesSlice.actions.addTrendingMovies(movies)));
  });

  return (
    <HomePage />
  );
};

export default App;