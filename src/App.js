import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies, addTopRatedMovies, addTrendingMovies } from './store/movies/movies.actions';
import './App.scss';
import HomePage from './pages/home-page/home-page.component';
import './sass/base/base.styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPopularMovies());
    dispatch(addTopRatedMovies());
    dispatch(addTrendingMovies());
  }, []);

  return (
    <HomePage />
  );
};

export default App;