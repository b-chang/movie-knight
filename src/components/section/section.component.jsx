import React, { useState, useEffect } from 'react';
import './section.styles.scss';
import PosterGroup from '../poster-group/poster-group.components';
import SelectionGroup from '../selection-group/selection-group.component';
import MEDIA_MAP from './section.constants';

const Section = ({
  movies: { results }, type
}) => {
  const [showMedia, setShowMedia] = useState('Streaming');

  // same as component did mount
  // whenever showMedia states then run this useEffect
  useEffect(() => {
    // what you want to run when useEffect runs
    // make api call with category and type
  }, []);

  // const handleSelection = (media) => {
  //   setShowMedia((prevState) => prevState);
  // };
  const { title, options = '' } = MEDIA_MAP[type];

  return (
    <div className="section">
      {title ? (
        <div className="column-header">
          <h2>{title}</h2>
          <SelectionGroup
            handleSelection={setShowMedia}
            showMedia={showMedia}
            options={options}
          />
        </div>
      ) : ''}
      <PosterGroup results={results} />
    </div>
  );
};

export default Section;