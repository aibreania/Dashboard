require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import App from './App';
import Nav from './Nav';
import Stat from './Stat';
import Circle from './perCircle';

let yeomanImage = require('../images/yeoman.png');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <App />
        <Circle />
        <Stat />
      </div>
    );
  }
}

Main.defaultProps = {
};


export default Main;
