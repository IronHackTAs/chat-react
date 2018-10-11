import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListProjectLoader } from './components/project/ListProjectLoader';
import {Chat} from './components/chat';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat/>
        <ListProjectLoader />
      </div>
    );
  }
}

export default App;
