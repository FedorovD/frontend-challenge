import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/Header/Header'
import PortfolioComponent from './components/Portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <PortfolioComponent />
        </div>
      </div>
    );
  }
}

export default App;
