import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React Crud</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/home'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Insert</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} className="nav-link">View</Link>
              </li>
            </ul>
          </div>
          </nav>
          <h>Welcome!</h><br/>
          <Routes>
            <Route exact path='/insert' component={Insert} />
            <Route exact path='/edit/:id' component={Edit} />
            <Route exact path='/view' component={View} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
