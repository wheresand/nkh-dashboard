//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Home from '/.components/Home';
import About from '/.components/About';
import contact from '/.components/contact';
import content from '/.components/content';

function App() {
  return (

    <div className="App">
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Home} />


          </Switch>
        </Router>
    </div>
  );
}

export default App;
