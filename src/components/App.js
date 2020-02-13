import React, { Component } from 'react';
import { connect } from 'react-redux'



class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather Teller</h1>
        <input></input>
        <button>Reducer Test</button>

        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
          <br/>
          <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/apixu-logo-1.png' alt="Weather data by WeatherAPI.com" border="0"/></a>
        </div>
      </div>
    );
  }
}

export default connect()(App);
