import React, { Component } from 'react';
import './App.css';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="app__box">
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default App;
