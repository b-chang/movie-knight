import React from 'react';
import Poster from '../poster/poster.component';

const PosterGroup = ({ results }) => (
  <>
    <div className="movie-poster">
      {
        results ? results.map(({
          id, title, release_date, poster_path
        }) => {
          const img = `https://image.tmdb.org/t/p/w154/${poster_path}`;
          return (
            <Poster
              key={id}
              title={title}
              releaseDate={release_date}
              poster={img}
            />
          );
        }) : ''
      }
    </div>
  </>
);

export default PosterGroup;