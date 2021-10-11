import logo from './logo.svg';
import './App.css';
import CovidTracker from './CovidTracker';
import Form from './Form';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Data from './Data';
import Chart from './Chart';
import ChartData from './Chart';
import Storage from './Storage';
import Search from './Search';
import SearchData from './Search';
import Navbar from './Navbar';
import './index.css'
//import Data from './Data'

function App() {
 
  return (
    <div title="container" className="wrapper">
      <h1>Covid Application</h1>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/form" component={Form}/>
          <Route path="/CovidTracker" component={CovidTracker}/>
          <Route path="/data" component={Data}/>
          <Route path="/storage" component={Storage}/>
          <Route path="/chart" component={Chart}/>
          <Route path="/search" component={SearchData}/>
 
        </Switch>
      </BrowserRouter>
     </div>
  );
 
}

export default App;
