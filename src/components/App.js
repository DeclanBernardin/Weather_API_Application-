import React, { Component } from 'react';
import './App.css';
import InputSection from './InputSection/InputSection'
import Checkbox from '@material-ui/core/Checkbox'



class App extends Component {

  state = {
    search: '',
    forecast: '3',
    data: [],
    temperature: false,
    wind: true,
    precip: true,
    visibility: true,

  }

  // toggles the temperature boolean
  toggleTemp = () => {
    this.setState({
      temperature: !this.state.temperature
    })
  }

  // toggles the wind boolean 
  toggleWind = () => {
    this.setState({
      wind: !this.state.wind
    })
  }

  // toggles the precip boolean 
  togglePrecipitation = () => {
    this.setState({
      precip: !this.state.precip
    })
  }

  //toggles the visibility boolean
  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  // changes the state of the search string 
  handleChangeSearchLocation = (event) => {
    console.log('typing in Input Location', event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  // changes the state of the days forecast min set to 3 and max set to 7
  handleChangeForecast = (event) => {
    console.log('typing in Input Forecast', event.target.value)
    if (event.target.value < 3) {
      alert('Needs to be more then 3')
    } else if (event.target.value > 7) {
      alert('Max forecast is 7 days')
    } else {
      this.setState({
        forecast: event.target.value
      })
    }
  }

  // sends a API request to the weather API using the data held in state and using the API key in the .ENV file. 
  // once it returns with the data it stores it in state to be used 
  findWeather = event => {
    event.preventDefault();
    if (this.state.search === '') {
      alert('enter in a location')
    } else {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&days=${this.state.forecast}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data })
          console.log('this is the data', this.state.data)
        })
        .catch(console.log('error'))
    }
  }

  render() {

    // decares forecast before entering the if statement so it can be called outside of the if statement . 
    let forecast = '';

    // mapped over the forecast data to be easily displayed. 
    // if statement prevents the map from running before there is any data. 
    if (this.state.data.forecast) {
      forecast = this.state.data.forecast.forecastday.map((info) => {
        return (
          <div class="futureData">
            <h3>Weather Forecast For:</h3>
            <h3 style={{ color: '#17252A'}}> {info.date}</h3>
            {this.state.temperature ? <h3> Max Temperature: {info.day.maxtemp_c} C</h3> : <h3>Max Temperature: {info.day.maxtemp_f} F</h3>}
            {this.state.temperature ? <h3> Avg Temperature: {info.day.avgtemp_c} C</h3> : <h3>Avg Temperature: {info.day.avgtemp_f} F</h3>}
            {this.state.temperature ? <h3> Min Temperature: {info.day.mintemp_c} C</h3> : <h3>Min Temperature: {info.day.mintemp_f} F</h3>}
            <h3>Conditions: {info.day.condition.text}</h3>
            {this.state.wind ? <h3>Max Wind: {info.day.maxwind_mph} MPH</h3> : <h3>Max Wind: {info.day.maxwind_kph} KPH</h3>}
            {this.state.precip ? <h3>Total Precipitation: {info.day.totalprecip_mm} mm</h3> : <h3>Total Precipitation: {info.day.totalprecip_in} in</h3>}
            {this.state.visibility ? <h3>Avg Visibility: {info.day.avgvis_km} km</h3> : <h3>Avg Visibility: {info.day.avgvis_miles} Miles</h3>}
            <h3>Avg Humidity: {info.day.avghumidity}%</h3>
          </div>
        )
      })
    }






    return (
      <div class="body">
        {/*little cloud for fun */}
        <i style={{fontSize: '90px', objectPosition: 'center'}} align='left' class="fas fa-cloud"></i>

        <InputSection/>

        {/*here are the instructions and the location toggle when weather API request is sent out */}
        {this.state.data.location ? <h1 style={{ color: '#17252A', fontSize: '50px' }}>{this.state.data.location.name}</h1>
          : <h1 style={{ color: '#17252A', fontSize: '50px', textAlign: 'center' }}
          >Enter in City Name, Zipcode, IP address, Canada Postalcode, UK Postcode, or Latitude and Longitude</h1>}

        <h1 style={{ color: '#17252A', fontSize: '50px' }}>{this.state.data.location ? this.state.data.location.region : null}</h1>

        <h1 style={{ color: '#17252A', fontSize: '50px' }} >{this.state.data.location ? this.state.data.location.country : null}</h1>

        {/*Here are all the toggle checkboxes to change the metric measurements  in the data displayed  */}
        <div class="measurementToggles">
          Temperature Measurement Toggle:
          <Checkbox onChange={this.toggleTemp} style={{color: 'white', margin: '10px' }}/>
          Wind Measurement Toggle:
          <Checkbox onChange={this.toggleWind} style={{ color: 'white', margin: '10px' }} />
          Precipitation Measurement Toggle:
          <Checkbox onChange={this.togglePrecipitation} style={{ color: 'white', margin: '10px' }} />
          Visibility Measurement Toggle:
          <Checkbox onChange={this.toggleVisibility} style={{ color: 'white', margin: '10px' }}  />
        </div>

      {/*Holds all the current data that is displayed from the API request */}
        {this.state.data.location ?
        <div class="grid">
          <div class="currentData">
            {this.state.data.current ? <h2 style={{color: '#DEF2F1'}}>Current Weather:</h2> : null}

            <p>{this.state.data.current ? <h3> {this.state.data.current.last_updated} </h3> : null}</p>

            {this.state.temperature ? <p> {this.state.data.current ? <h3> Temperature: {this.state.data.current.temp_c} C</h3> : null}</p>
              : <p>  {this.state.data.current ? <h3>Temperature: {this.state.data.current.temp_f} F</h3> : null}</p>}

            {this.state.temperature ? <p>{this.state.data.current ? <h3>Feels Like: {this.state.data.current.feelslike_c} C</h3> : null}</p>
              : <p>{this.state.data.current ? <h3>Feels Like: {this.state.data.current.feelslike_f} F</h3> : null}</p>}

            {this.state.data.current ? <h3>Conditions: {this.state.data.current.condition.text}</h3> : null}

            {this.state.wind ? <p>{this.state.data.current ? <h3>Wind: {this.state.data.current.wind_mph} MPH</h3> : null}</p>
              : <p>{this.state.data.current ? <h3>Wind: {this.state.data.current.wind_kph} KPH</h3> : null}</p>}

            {this.state.wind ? <p>{this.state.data.current ? <h3> Wind Gusts: {this.state.data.current.gust_mph} MPH</h3> : null}</p>
              : <p>{this.state.data.current ? <h3> Wind Gusts: {this.state.data.current.gust_kph} KPH</h3> : null}</p>}

            {this.state.data.current ? <h3> Wind Direction: {this.state.data.current.wind_dir}</h3> : null}

            {this.state.precip ? <p>{this.state.data.current ? <h3>Precipitation: {this.state.data.current.precip_mm} mm</h3> : null}</p>
              : <p>{this.state.data.current ? <h3>Precipitation: {this.state.data.current.precip_in} in</h3> : null}</p>}

            {this.state.data.current ? <h3>Humidity: {this.state.data.current.humidity}%</h3> : null}

            {this.state.data.current ? <h3>Cloud Coverage: {this.state.data.current.cloud}%</h3> : null}

            {this.state.visibility ? <p>{this.state.data.current ? <h3> Visibility: {this.state.data.current.vis_km} km</h3> : null}</p>
              : <p>{this.state.data.current ? <h3> Visibility: {this.state.data.current.vis_miles} Miles</h3> : null}</p>}
          </div>
          {/* The mapped forecast data is then displayed here */}
          {forecast}
        </div> 
        : 
        
        <div>
            {/*this div prevents a random bar from showing on the screen */}
        </div> }

        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </div>
      </div>
    );
  }
}



export default App;
