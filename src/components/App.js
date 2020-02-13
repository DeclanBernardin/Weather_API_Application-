import React, { Component } from 'react';
import { connect } from 'react-redux'



class App extends Component {

  state = {
    search: ''
  }

  handleChangeSearchLocation = (event) => {
    console.log('typing in Input', event.target.value)
    this.setState({
      search: event.target.value
    })
  }
  
  findWeather = event => {
    event.preventDefault();
    console.log('searching for weather in', this.state.search);
    this.props.dispatch({
      type: 'FETCH_WEATHER',
      payload: this.state
    });
    this.setState({
      search: ''
    }); 

  }




  render() {
    return (
      <div>
        <h1>Weather Teller</h1>
        <input placeholder='enter location' onChange={this.handleChangeSearchLocation}></input>
        <button onClick={this.findWeather}>Find Weather</button>

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
