import React, { useState, useEffect } from 'react';
import './selector.styles.scss';

const Selector = ({ className, children, showSelection }) => {
  const [mediaSelection, setMediaSelection] = useState(
    { selectionHasChange: false, selection: 'Streaming' }
  );

  const buttonHandler = (e) => {
    setMediaSelection((prevState) => (
      { selectionHasChange: !prevState.selectionHasChange, selection: e.value }
    ));
  };

  useEffect(() => {
    showSelection(mediaSelection);
  }, [mediaSelection]);

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