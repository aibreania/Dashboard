require('normalize.css/normalize.css');

import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Stat from './Stat';
import Circle from './perCircle';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Circle />
        <Stat />
      </div>
    );
  }
}

App.defaultProps = {
};


export default App;
