//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Home from '/.components/Home';
import About from '/.components/About';
import Contact from '/.components/contact';
import Content from '/.components/content';

import Navbermenu from '.components/menu/Navbermenu';
function App() {
  return (

    <div className="App">
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/About" component={About} />
            <Route  path="/Contact" component={Contact} />
            <Route  path="/Content" component={Content} />


          </Switch>
        </Router>
    </div>
  );
}

export default App;
