import React, { useState, useEffect } from 'react';
import './section.styles.scss';
import Poster from '../poster/poster.component';
import PosterGroup from '../poster-group/poster-group.components';
import Selector from '../selector/selector.component';
import SelectionGroup from '../selection-group/selection-group.component';
import MEDIA_MAP from './section.constants';

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
      <PosterGroup results={results} />
    </div>
  );
};

export default Section;