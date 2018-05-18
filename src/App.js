import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay zip={"12345"} />
      </div>
    );
  }
}
class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying some Weather!</h1>
    );
  }
}

export default App;
