import React from 'react';
import './selector.styles.scss';

const Selector = ({ className, children }) => (
  <div className={className.replace(/\s/g, '-').toLowerCase()}>{children}</div>
);

export default Selector;