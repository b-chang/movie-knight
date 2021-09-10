import React, { useState, useEffect } from 'react';
import './section.styles.scss';
import Poster from '../poster/poster.component';
import Selector from '../selector/selector.component';
import SelectionGroup from '../selection-group/selection-group.component';
// import Header from '../header/header.components';

// const MediaTypeMap = {
//   'PopularMovies': {
//     options: [
//       { id: 1, value: 'Streaming' },
//       { id: 2, value: 'On TV' },
//       { id: 3, value: 'For Rent' },
//       { id: 4, value: 'In Theaters' }
//     ]
//   }
// }

const Section = ({ title, movies: { results }, selections }) => {
  const [showMedia, setShowMedia] = useState(
    { selectionHasChange: false, selection: 'Streaming' }
  );

  // same as component did mount
  // whenever showMedia states then run this useEffect
  useEffect(() => {
    // what you want to run when useEffect runs
    // make api call with category and type
  }, []);

  const handleSelection = (media) => {
    setShowMedia((prevState) => prevState);
  };

  return (
    <div className="section">
      {title ? (
        <div className="column-header">
          <h2>{title}</h2>
          <SelectionGroup
            selections={selections}
            handleSelection={handleSelection}
            showMedia={showMedia}
          />
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