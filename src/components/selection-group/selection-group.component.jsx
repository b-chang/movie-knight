import React from 'react';
import Selector from '../selector/selector.component';

const SelectionGroup = ({
  handleSelection, showMedia, options
}) => (
  <div className="selection-group">
    {
      options ? options.map(({ id, value }) => (
        <Selector
          key={id}
          className={`${value}-selector`}
          handleSelection={handleSelection}
          showMedia={showMedia}
        >
          {value}
        </Selector>
      )) : ''
    }
  </div>
);

export default SelectionGroup;