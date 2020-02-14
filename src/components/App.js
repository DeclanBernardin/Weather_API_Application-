import React, { Component } from 'react';



class App extends Component {

  state = {
    search: '',
    forecast: '3',
    data: [],
    
  }

 

  handleChangeSearchLocation = (event) => {
    console.log('typing in Input Location', event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  handleChangeForecast = (event) => {
    console.log('typing in Input Forecast', event.target.value)
    this.setState({
      forecast: event.target.value
    })
  }

  findWeather = event => {
    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&days=${this.state.forecast}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data })
        console.log('this is the data', this.state.data.location)
      })
      .catch(console.log('error'))
    }




  render() {






    return (
      <div>
        <h1>Weather Teller</h1>
        <input placeholder='enter location' onChange={this.handleChangeSearchLocation}></input>
        <input placeholder='Forecast range' type="number" min="3" max="10" onChange={this.handleChangeForecast}></input>
        <button onClick={this.findWeather}>Find Weather</button>

        
        <h1>{this.state.data.location ? this.state.data.location.name : '' }</h1>
        
        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </div>
      </div>
    );
  }
}



export default App;
