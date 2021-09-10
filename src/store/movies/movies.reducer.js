const INITIAL_STATE = {};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const moviesTopRatedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TOP_RATED_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const moviesTrendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TRENDING_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export {
  moviesReducer,
  moviesTopRatedReducer,
  moviesTrendingReducer
};