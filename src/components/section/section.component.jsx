import React, { useState, useEffect } from 'react';
import './section.styles.scss';
import Poster from '../poster/poster.component';
import Selector from '../selector/selector.component';

const Section = ({ title, movies: { results }, selections }) => {
  const [showMedia, setShowMedia] = useState(
    { selectionHasChange: false, selection: 'Streaming', results }
  );

  useEffect(() => {
  }, [showMedia]);

  const handleSelection = (media) => {
    setShowMedia((prevState) => prevState);
  };

  return (
    <div className="section">
      {title ? (
        <div className="column-header">
          <h2>{title}</h2>
          <div className="selector">
            {
              selections ? selections.map(({ id, value }) => (
                <Selector
                  key={id}
                  className={`${value}-selector`}
                  showSelection={handleSelection}
                  showMedia={showMedia}
                >
                  {value}
                </Selector>
              )) : ''
            }
          </div>
        </div>
      ) : ''}
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
};

export default Section;