import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import routes from './routes/router';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    console.log(...routes);
    return (

      <div>
        <Router>
          <Navbar />
        </Router>

        <Footer />
      </div>

    )
  }
}