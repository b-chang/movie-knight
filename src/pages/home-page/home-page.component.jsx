import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);

  return (
    <div className="home-page">
      <Section title="What's Popular" className="section" selections={[{ id: 1, value: 'Streaming' }, { id: 2, value: 'On TV' }, { id: 3, value: 'For Rent' }, { id: 4, value: 'In Theaters' }]} movies={state.addPopularMovies || ''} />
      <Section title="Top Rated" className="section" selections={[{ id: 1, value: 'Movies' }, { id: 2, value: 'TV' }]} movies={state.topRatedMovies || ''} />
      <Section title="Trending Movies" className="section" selections={[{ id: 1, value: 'Today' }, { id: 2, value: 'This Week' }]} movies={state.trendingMovies || ''} />
    </div>
  );
};

export default HomePage;