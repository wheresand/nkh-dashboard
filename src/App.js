import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Dropdown1 from './components/Dropdown1';
import Dropdown2 from './components/Dropdown2';

import Navbermenu from './components/menu/Navbermenu';

function App() {
  return (

    <div>
        <Router basename="/">
          {/*Add Menu Components */}
          <Navbermenu />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route  path="/About" component={About} />
            <Route  path="/Dropdown1" component={Dropdown1} />
            <Route  path="/Dropdown2" component={Dropdown2} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
