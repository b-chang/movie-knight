import React, { useState, useEffect } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import './selector.styles.scss';

const Selector = ({
  className, children, handleSelection, showMedia
}) => {
  const buttonHandler = (e) => {
    if (e.value) {
      handleSelection(e.value);
    }
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