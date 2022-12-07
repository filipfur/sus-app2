import * as React from 'react';

import './Post.css';

export default function Post({ title, children }) {
  return (
    <div className="rainbowGradient">
    <div className="Post">
      <h1>{title}</h1>
      {children}
    </div>
    </div>
  );
}
