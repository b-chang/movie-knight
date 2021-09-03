import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);

  return (
    <div className="home-page">
      <Section title="What's Popular" className="section" movies={state.movies || ''} />
      <Section title="Top Rated" className="section" movies={state.topRatedMovies || ''} />
      <Section title="Trending Movies" className="section" movies={state.trendingMovies || ''} />
    </div>
  );
};

export default HomePage;