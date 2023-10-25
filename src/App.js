
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        
       <News country="in" category="business"/>
      </div>
    )
  }
}

