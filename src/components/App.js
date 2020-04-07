import React, { Component } from 'react';
import './App.css';
import InputSection from './InputSection/InputSection'
import Checkbox from '@material-ui/core/Checkbox'




class App extends Component {

  
  // sends a API request to the weather API using the data held in state and using the API key in the .ENV file. 
  // once it returns with the data it stores it in state to be used 
  // findWeather = event => {
  //   event.preventDefault();
  //   if (this.state.search === '') {
  //     alert('enter in a location')
  //   } else {
  //     fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&days=${this.state.forecast}`)
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.setState({ data: data })
  //         console.log('this is the data', this.state.data)
  //       })
  //       .catch(console.log('error'))
  //   }
  // }

  render() {

    // decares forecast before entering the if statement so it can be called outside of the if statement . 
    // let forecast = '';

    // // mapped over the forecast data to be easily displayed. 
    // // if statement prevents the map from running before there is any data. 
    // if (this.state.data.forecast) {
    //   forecast = this.state.data.forecast.forecastday.map((info) => {
    //     return (
    //       <div class="futureData">
    //         <h3>Weather Forecast For:</h3>
    //         <h3 style={{ color: '#17252A'}}> {info.date}</h3>
    //         {this.state.temperature ? <h3> Max Temperature: {info.day.maxtemp_c} C</h3> : <h3>Max Temperature: {info.day.maxtemp_f} F</h3>}
    //         {this.state.temperature ? <h3> Avg Temperature: {info.day.avgtemp_c} C</h3> : <h3>Avg Temperature: {info.day.avgtemp_f} F</h3>}
    //         {this.state.temperature ? <h3> Min Temperature: {info.day.mintemp_c} C</h3> : <h3>Min Temperature: {info.day.mintemp_f} F</h3>}
    //         <h3>Conditions: {info.day.condition.text}</h3>
    //         {this.state.wind ? <h3>Max Wind: {info.day.maxwind_mph} MPH</h3> : <h3>Max Wind: {info.day.maxwind_kph} KPH</h3>}
    //         {this.state.precip ? <h3>Total Precipitation: {info.day.totalprecip_mm} mm</h3> : <h3>Total Precipitation: {info.day.totalprecip_in} in</h3>}
    //         {this.state.visibility ? <h3>Avg Visibility: {info.day.avgvis_km} km</h3> : <h3>Avg Visibility: {info.day.avgvis_miles} Miles</h3>}
    //         <h3>Avg Humidity: {info.day.avghumidity}%</h3>
    //       </div>
    //     )
    //   })
    // }






    return (
      <div class="body">
       <InputSection/>

        <div>
          <p>Powered By</p>
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </div>
      </div>
    );
  }
}



export default App;
