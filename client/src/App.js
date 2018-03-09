import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'

import Login from './pages/Login'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Upload from './pages/Upload'
import Book from './pages/Book'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/book/:id" component={Book} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
