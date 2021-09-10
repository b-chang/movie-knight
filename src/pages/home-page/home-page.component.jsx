import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);
  const tvState = useSelector((state) => state.tvReducer);

  return (
    <div className="home-page">
      <Section
        title="What's Popular"
        className="section"
        type="optionsPopular"
        movies={state.addPopularMovies || ''}
      />
      <Section
        title="Top Rated"
        className="section"
        type="optionsTopRated"
        movies={state.topRatedMovies || ''}
      />
      <Section
        title="Trending Movies"
        className="section"
        type="optionsTrending"
        movies={state.trendingMovies || ''}
      />
      <Section
        title="Popular TV"
        className="section"
        movies={tvState.popularTV || ''}
      />
    </div>
  );
};

export default HomePage;