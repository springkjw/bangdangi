import React from 'react';
import * as style from './style';

export default props => (
  <style.Container className="test">
    <h1>방</h1>
    {JSON.stringify(props)}
  </style.Container>
);
