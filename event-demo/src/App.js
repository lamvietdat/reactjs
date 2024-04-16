import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TVC_EventForm1 from './components/TVC_EventForm1';
import TVC_EventForm2 from './components/TVC_EventForm2';
import TVC_EventForm3 from './components/TVC_EventForm3';
import TVC_EventForm4 from './components/TVC_EventForm4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <TVC_EventForm1 />
          <TVC_EventForm2 />
          <TVC_EventForm3 />
          <TVC_EventForm4 name="Lâm Viết Đạt" />
      </div>
      );
    }
  }
}  