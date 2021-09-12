import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../../components/section/section.component';
import { addPopularMovies } from '../../store/movies/movies.actions';

const HomePage = () => {
  const state = useSelector((state) => state);
  const {
    moviesReducer, moviesTopRatedReducer, moviesTrendingReducer, movies
  } = state;
  const dispatch = useDispatch();

  console.log(movies.entities[0]);

  useEffect(() => {
    dispatch(addPopularMovies());
  }, []);

  return (
    <div className="home-page">
      <Section
        type="optionsPopular"
        movies={movies.entities[0] || ''}
      />
      <Section
        type="optionsTopRated"
        movies={moviesTopRatedReducer || ''}
      />
      <Section
        type="optionsTrending"
        movies={moviesTrendingReducer || ''}
      />
    </div>
  );
};

export default HomePage;