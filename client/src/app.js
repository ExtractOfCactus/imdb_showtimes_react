import React from 'react';
import ReactDOM from 'react-dom';

import ShowtimeContainer from './container/ShowtimeContainer.jsx'

window.onload = function(){
  ReactDOM.render(
    <ShowtimeContainer />,
    document.getElementById('app')
  );
}
