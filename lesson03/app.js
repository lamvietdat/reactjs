import React, { Component } from 'react'
import NVT_eventHanlde1 from './components/Lvd_eventhandle1';
import NVT_eventHanlde2 from './components/Lvd_eventhandle2';
import NVT_eventHanlde3 from './components/Lvd_eventhandle3';
import NVT_eventHanlde4 from './components/Lvd_eventhandle4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event form demo </h1>
        <NVT_eventHanlde1/>
        <NVT_eventHanlde2/>
        <NVT_eventHanlde3/>
        <NVT_eventHanlde4/>
        

      </div>
    );
  }
}