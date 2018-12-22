import React, { Component } from 'react';
import logo from './assets/images/guess-who.jpg';
import './App.css';
import CharacterTable from './CharacterTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CharacterTable />
      </div>
    );
  }
}

export default App;
