import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);

  return (
    <div className="home-page">
      <Section title="What's Popular" className="section" selections={['Streaming', 'On TV', 'For Rent', 'In Theaters']} movies={state.movies || ''} />
      <Section title="Top Rated" className="section" selections={['Movies', 'TV']} movies={state.topRatedMovies || ''} />
      <Section title="Trending Movies" className="section" selections={['Today', 'This Week']} movies={state.trendingMovies || ''} />
    </div>
  );
};

export default HomePage;