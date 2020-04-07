import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'


class InputSection extends Component {

    state = {
        location: '',
        forecast: 3,
    }

    handleChangeSearchLocation = (event) => {
        this.setState({
            location: event.target.value
        })
        console.log(this.state.location)
    }

    handleChangeForecast = (event) => {
        this.setState({
            forecast: event.target.value
        })
        console.log(this.state.forecast)
    }

    findWeather = () => {
        console.log(this.state)
        this.props.dispatch({
            type: 'FIND_WEATHER',
            payload: this.state
        })
    }

    render () {
        return (
            <div class="inputs">
                <h1 class="title" align='right'>The Weather Teller App</h1>
                {/* Location input changes the search state on change*/}
                <Input
                    placeholder='enter location'
                    style={{ color: '#FEFFFF', margin: '30px' }}
                    onChange={this.handleChangeSearchLocation}
                ></Input>

                {/*input for the forecast days takes in any number between 3 and 7 starts at 3 */}
                The next
          <Input
                    value={this.state.forecast}
                    placeholder='Forecast range'
                    style={{ color: '#FEFFFF', margin: '10px', width: '35px', textAlign: 'center' }}
                    type="number"
                    min="3"
                    max="7"
                    onChange={this.handleChangeForecast}
                ></Input>
                day forecast.
      
          <br />

                {/* when pressed it takes the info collected from the inputs and sends them to the findWeather function */}
                <Button
                    onClick={this.findWeather}
                    style={{ color: '#FEFFFF', margin: '30px', fontSize: '30px' }}
                >Find The Weather</Button>
            </div>
        )
    }
}

export default connect() (InputSection); 