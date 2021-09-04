import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../components/section/section.component';

const HomePage = () => {
  const state = useSelector((state) => state.moviesReducer);
  const tvState = useSelector((state) => state.tvReducer);
  const options = {
    optionsPopular: [
      { id: 1, value: 'Streaming' },
      { id: 2, value: 'On TV' },
      { id: 3, value: 'For Rent' },
      { id: 4, value: 'In Theaters' }
    ],
    optionsTopRated: [
      { id: 1, value: 'Movies' },
      { id: 2, value: 'TV' }
    ],
    optionsTrending: [
      { id: 1, value: 'Today' },
      { id: 2, value: 'This Week' }
    ]
  };

  return (
    <div className="home-page">
      <Section
        title="What's Popular"
        className="section"
        selections={options.optionsPopular}
        movies={state.addPopularMovies || ''}
      />
      <Section
        title="Top Rated"
        className="section"
        selections={options.optionsTopRated}
        movies={state.topRatedMovies || ''}
      />
      <Section
        title="Trending Movies"
        className="section"
        selections={options.Trending}
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