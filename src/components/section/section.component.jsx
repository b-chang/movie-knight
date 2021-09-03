import React from 'react';
import './section.styles.scss';
import Poster from '../poster/poster.component';

const Section = ({ title, movies: { results } }) => (
  <div className="section">
    {title ? <p className="section-title">{title}</p> : ''}
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
  </div>
);

export default Section;