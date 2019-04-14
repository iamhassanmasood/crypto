import React, { Component } from 'react';
import logo from '../src/assets/images.png'
import Coin from './components/Coin';

class App extends Component {
  render() {
    return (
      <div className="col-xl-12">
        <nav className="navbar navbar-expand-xl bg-white navbar-light">
          <img src={logo} alt="logo" style={{ width: '40px' }} />
          <a className="navbar-brand" style={{ fontWeight: 'bold', padding: 16 }}>
            CryptoCurrency
  </a>

        </nav>
        <div className="row">
          <div className="col-xl-12 mt-5">
            <Coin />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
