const addPopularTV = (state, action) => {
  const popularTV = action.payload;
  return {
    ...state,
    popularTV
  };
};

export default addPopularTV;