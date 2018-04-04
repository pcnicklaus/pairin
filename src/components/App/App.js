import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';

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
