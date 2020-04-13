import React, { Component } from 'react';
import './App.css';
import InputSection from '../InputSection/InputSection';




class App extends Component {

  render() {

    return (
      <div class="body">
        <InputSection />
        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </div>
      </div>
    );
  }
}



export default App;
