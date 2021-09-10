import React from 'react';
import Selector from '../selector/selector.component';

const SelectionGroup = ({ selections, handleSelection, showMedia }) => (
  <div className="selection-group">
    {
    selections ? selections.map(({ id, value }) => (
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