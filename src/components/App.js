import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'


class App extends Component {

  state = {
    search: '',
    forecast: '3',
    data: [],
    tempature: false,
    wind: true,
    pressure: true,
    precip: true,
    visability: true,

  }

  handleChangeSearchLocation = (event) => {
    console.log('typing in Input Location', event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  handleChangeForecast = (event) => {
    console.log('typing in Input Forecast', event.target.value)
    if (event.target.value < 3) {
      alert('Needs to be more then 3')
    } else if (event.target.value > 10) {
      alert('Max forecast is 10 days')
    } else {
      this.setState({
        forecast: event.target.value
      })
    }
  }

  findWeather = event => {
    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&days=${this.state.forecast}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data })
        console.log('this is the data', this.state.data)
      })
      .catch(console.log('error'))
  }

  render() {




    return (
      <div class="body">

        <h1 class="title">The Weather Teller App</h1>

        <div class="inputs">
          
          <Input 
          placeholder='enter location' 
          style={{ color: '#FEFFFF', margin: '30px' }} 
          onChange={this.handleChangeSearchLocation}
          ></Input>

          The next
          <Input 
          value={this.state.forecast} 
          placeholder='Forecast range' 
          style={{ color: '#FEFFFF', margin: '10px', width: '35px', textAlign: 'center' }} 
          type="number" 
          min="3" 
          max="10" 
          onChange={this.handleChangeForecast}
          ></Input>
          day forecast.

          <br />

          <Button 
          onClick={this.findWeather} 
          style={{ color: '#FEFFFF', margin: '30px', fontSize: '30px' }} 
          >Find The Weather</Button>

        </div>


        {this.state.data.location ? <h1>{this.state.data.location.name}</h1> 
        : <h1 style={{ color: '#17252A', fontSize: '50px', textAlign: 'center' }}
        >Enter in City Name, Zipcode, IP address, Canada Postalcode, UK Postcode, or Latitude and Longitude</h1>}
       
        <h1 >{this.state.data.location ? this.state.data.location.region : ''}</h1>
        
        <h1 >{this.state.data.location ? this.state.data.location.country : ''}</h1>

        <div class="currentData">
          {this.state.data.current ? <h2>Current:</h2> : ''}

          <h3>{this.state.data.current ? this.state.data.current.last_updated : ''}</h3>

          {this.state.tempature ? <p>{this.state.data.current ? <h3>Tempature: {this.state.data.current.temp_c} C</h3> : ''}</p> 
          : <p>{this.state.data.current ? <h3> Tempature: {this.state.data.current.temp_f} F</h3> : ''}</p> }

          {this.state.tempature ? <p>{this.state.data.current ? <h3>Feels Like: {this.state.data.current.feelslike_c} C</h3> : ''}</p>
            : <p>{this.state.data.current ? <h3>Feels Like: {this.state.data.current.feelslike_f} F</h3> : ''}</p>}

          {this.state.data.current ? <h3>Conditions: {this.state.data.current.condition.text}</h3> : ''}

          {this.state.wind ? <p>{this.state.data.current ? <h3>Wind: {this.state.data.current.wind_mph} MPH</h3> : ''}</p> 
            : <p>{this.state.data.current ? <h3>Wind: {this.state.data.current.wind_kph} KPH</h3> : ''}</p> }
            
          {this.state.wind ? <p>{this.state.data.current ? <h3> Wind Gusts: {this.state.data.current.gust_mph} MPH</h3> : ''}</p>
            : <p>{this.state.data.current ? <h3> Wind Gusts: {this.state.data.current.gust_kph} KPH</h3> : ''}</p>}
          
          {this.state.data.current ? <h3> Wind Direction: {this.state.data.current.wind_dir}</h3> : ''}

          {this.state.precip ? <p>{this.state.data.current ? <h3>Precipitation: {this.state.data.current.precip_mm} mm</h3> : ''}</p> 
            : <p>{this.state.data.current ? <h3>Precipitation: {this.state.data.current.precip_in} in</h3> : ''}</p> }
          
          {this.state.data.current ? <h3>Humidity: {this.state.data.current.humidity}%</h3> : ''}

          {this.state.data.current ? <h3>Cloud Coverage: {this.state.data.current.cloud}</h3> : ''}

          

          {this.state.visability ? <p>{this.state.data.current ? <h3> Visability: {this.state.data.current.vis_km}</h3> : ''}</p> 
            : <p>{this.state.data.current ? <h3> Visability: {this.state.data.current.vis_miles}</h3> : ''}</p> }
          
          
        </div>


        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </div>
      </div>
    );
  }
}



export default App;
