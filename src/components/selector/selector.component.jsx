import React from 'react';
import './selector.styles.scss';

const Selector = ({ className, children }) => {
  const handleSelection = (e) => {
    console.log(e.target.value);
  };
  return (
    <button type="button" onClick={handleSelection} value={children} className={className.replace(/\s/g, '-').toLowerCase()}>{children}</button>
  );
};

export default Selector;