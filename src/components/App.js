import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'


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
          <Input placeholder='enter location' style={{ color: '#FEFFFF', margin: '30px' }} onChange={this.handleChangeSearchLocation}></Input>
          The next
          <Input value={this.state.forecast} placeholder='Forecast range' style={{ color: '#FEFFFF', margin: '10px', width: '35px', textAlign: 'center' }} type="number" min="3" max="10" onChange={this.handleChangeForecast}></Input>
          day forecast.
          <br />
          <Button onClick={this.findWeather} style={{ color: '#FEFFFF', margin: '30px', fontSize: '30px' }} >Find The Weather</Button>
        </div>


        {this.state.data.location ? <h1>{this.state.data.location.name}</h1> : <h1 style={{ color: '#17252A', fontSize: '50px', textAlign: 'center'}}>Enter in City Name, Zipcode, IP address, Canada Postalcode, UK Postcode, or Latitude and Longitude</h1>}
        <h1 >{this.state.data.location ? this.state.data.location.region : ''}</h1>
        <h1 >{this.state.data.location ? this.state.data.location.country : ''}</h1>

        <div>
        <h3>{this.state.data.current? this.state.data.current.last_updated : ''}</h3>


          <h3>{this.state.data.current ? this.state.data.current.temp_c : ''}</h3>
        <h3>{this.state.data.current ? this.state.data.current.temp_f : ''}</h3>

        <h3>{this.state.data.current ? this.state.data.current.condition.text : ''}</h3>

        <h3>{this.state.data.current ? this.state.data.current.wind_mph : ''}</h3>
        <h3>{this.state.data.current ? this.state.data.current.wind_kph : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.wind_dir : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.pressure_mb: ''}</h3>
          <h3>{this.state.data.current ? this.state.data.current.pressure_in : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.precip_mm : ''}</h3>
          <h3>{this.state.data.current ? this.state.data.current.precip_in : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.humidity : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.cloud : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.wind_kph : ''}</h3>

          <h3>{this.state.data.current ? this.state.data.current.wind_kph : ''}</h3>
          <h3>{this.state.data.current ? this.state.data.current.wind_kph : ''}</h3>
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
