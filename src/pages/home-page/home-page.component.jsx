import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state);
  const { moviesReducer, moviesTopRatedReducer, moviesTrendingReducer } = state;
  return (
    <div className="home-page">
      <Section
        type="optionsPopular"
        movies={moviesReducer || ''}
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