import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moviesSlice } from './store/movies/movies.reducer';
import { tvSlice } from './store/tv/tv.reducer';
import './App.scss';
import HomePage from './pages/home-page/home-page.component';
import './sass/base/base.styles.scss';

const { REACT_APP_API_KEY } = process.env;

const App = () => {
  const dispatch = useDispatch();

  const generateUrl = (type, category, page) => `https://api.themoviedb.org/3/${type}/${category}?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const fetchMedia = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  // use one useEffect; brackets [] or it'll be called all the time
  useEffect(() => {
    fetchMedia(generateUrl('movie', 'popular', '2'))
      .then((movies) => dispatch(moviesSlice.actions.addPopularMovies(movies)));
  }, []);

  useEffect(() => {
    fetchMedia(generateUrl('movie', 'top_rated', '3'))
      .then((movies) => dispatch(moviesSlice.actions.addTopRatedMovies(movies)));
  });

  useEffect(() => {
    fetchMedia(generateUrl('trending', 'movie/day', '1'))
      .then((movies) => dispatch(moviesSlice.actions.addTrendingMovies(movies)));
  });

  useEffect(() => {
    fetchMedia(generateUrl('tv', 'popular', '1'))
      .then((tv) => dispatch(tvSlice.actions.addPopularTV(tv)));
  });

  return (
    <HomePage />
  );
};

export default App;