import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);
  const tvState = useSelector((state) => state.tvReducer);

  return (
    <div className="home-page">
      <Section
        type="optionsPopular"
        movies={state.addPopularMovies || ''}
      />
      <Section
        type="optionsTopRated"
        movies={state.topRatedMovies || ''}
      />
      <Section
        type="optionsTrending"
        movies={state.trendingMovies || ''}
      />
    </div>
  );
};

export default HomePage;