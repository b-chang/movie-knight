// adding movies to state
const addPopularMovies = (state, action) => {
  // console.log('logging state', {state, action})
  // const { movies } = action.payload;
  const addPopularMovies = action.payload;
  // console.log(movies)
  return {
    ...state,
    addPopularMovies
  };
};

const addTopRatedMovies = (state, action) => {
  // console.log('logging top rated movies', {state, action})
  const topRatedMovies = action.payload;
  return {
    ...state,
    topRatedMovies
  };
};

const addTrendingMovies = (state, action) => {
  const trendingMovies = action.payload;
  return {
    ...state,
    trendingMovies
  };
};

export {
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies
};