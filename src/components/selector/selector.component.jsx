import React, { useState, useEffect } from 'react';
import './selector.styles.scss';

const Selector = ({
  className, children, handleSelection, showMedia
}) => {
  const buttonHandler = (e) => {
    if (e.value === showMedia.selection) {
      showMedia.selectionHasChange = false;
    }

    if (e.value !== showMedia.selection) {
      showMedia.selection = e.value;
      showMedia.selectionHasChange = true;
    }
    handleSelection(showMedia);
  };

  return (
    <button
      type="button"
      onClick={(e) => buttonHandler(e.target)}
      value={children}
      className={className.replace(/\s/g, '-').toLowerCase()}
    >
      {children}
    </button>
  );
};

export default Selector;