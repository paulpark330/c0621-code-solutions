import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

const element = (
  <HotButton text="Hot Button"/>
);

ReactDOM.render(element, document.querySelector('#root'));
