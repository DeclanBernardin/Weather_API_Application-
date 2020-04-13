import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Location from '../location/location'




class InputSection extends Component {

    state = {
        location: '',
        forecast: 7,
        dayNumber: '',
        day: '',
        forecastDay1: '',
        forecastDay2: '',
        forecastDay3: '',
        forecastDay4: '',
        forecastDay5: '',
        forecastDay6: '',
        current: true,
        forecast1: false,
        forecast2: false,
        forecast3: false,
        forecast4: false,
        forecast5: false,
        forecast6: false,
        conversion: true,
        data: {}
    }

    handleChangeSearchLocation = (event) => {
        this.setState({
            location: event.target.value
        })
        console.log(this.state.location)
    }


    findWeather = () => {
        console.log(this.state)
        this.props.dispatch({
            type: 'FIND_WEATHER',
            payload: this.state
        })

        setTimeout(() => {
            this.handleWeekday()
            this.collectData()
        }, 1000);

    }


    collectData() {
        this.setState({
            data: this.props.reduxStore.weatherData
        })
        console.log('here is the data', this.state.data)
    }


    handleWeekday() {


        if (this.props.reduxStore.weatherData.location) {
            let weekdays = new Date(this.props.reduxStore.weatherData.location.localtime);
            this.setState({ dayNumber: weekdays.getDay() })
            console.log('This is the first day', this.state.dayNumber)
        } else {
            console.log('error with weekday')
        }


        if (this.state.dayNumber === 0) {
            this.setState({ day: 'Sunday', forecastDay1: 'Monday', forecastDay2: 'Tuesday', forecastDay3: 'Wednesday', forecastDay4: 'Thursday', forecastDay5: 'Friday', forecastDay6: 'Saturday' })
        } else if (this.state.dayNumber === 1) {
            this.setState({ day: 'Monday', forecastDay1: 'Tuesday', forecastDay2: 'Wednesday', forecastDay3: 'Thursday', forecastDay4: 'Friday', forecastDay5: 'Saturday', forecastDay6: 'Sunday' })
        } else if (this.state.dayNumber === 2) {
            this.setState({ day: 'Tuesday', forecastDay1: 'Wednesday', forecastDay2: 'Thursday', forecastDay3: 'Friday', forecastDay4: 'Saturday', forecastDay5: 'Sunday', forecastDay6: 'Monday' })
        } else if (this.state.dayNumber === 3) {
            this.setState({ day: 'Wednesday', forecastDay1: 'Thursday', forecastDay2: 'Friday', forecastDay3: 'Saturday', forecastDay4: 'Sunday', forecastDay5: 'Monday', forecastDay6: 'Tuesday' })
        } else if (this.state.dayNumber === 4) {
            this.setState({ day: 'Thursday', forecastDay1: 'Friday', forecastDay2: 'Saturday', forecastDay3: 'Sunday', forecastDay4: 'Monday', forecastDay5: 'Tuesday', forecastDay6: 'Wednesday' })
        } else if (this.state.dayNumber === 5) {
            this.setState({ day: 'Friday', forecastDay1: 'Saturday', forecastDay2: 'Sunday', forecastDay3: 'Monday', forecastDay4: 'Tuesday', forecastDay5: 'Wednesday', forecastDay6: 'Thursday' })
        } else {
            this.setState({ day: 'Saturday', forecastDay1: 'Sunday', forecastDay2: 'Monday', forecastDay3: 'Tuesday', forecastDay4: 'Wednesday', forecastDay5: 'Thursday', forecastDay6: 'Friday' })
        }
        console.log('today is', this.state.day, this.state.forecastDay1)
    }

    render() {

        return (
            <div>
                <h1>The Weather Teller App</h1>
                {/* Location input changes the search state on change*/}
                <Input
                    placeholder='enter location'
                    style={{ color: '#FEFFFF', margin: '30px' }}
                    onChange={this.handleChangeSearchLocation}
                ></Input>

                {/* when pressed it takes the info collected from the inputs and sends them to the findWeather function */}
                <Button
                    onClick={this.findWeather}
                    style={{ color: '#FEFFFF', margin: '30px', fontSize: '30px' }}
                >Find The Weather</Button>

                {this.state.data.location ?
                    <div className="selected">
                        <Location />


                        {this.state.data.location ? <div>{this.state.current ? <p>{this.state.day}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.current ? <p>{this.state.data.current.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.current ? <img src={this.state.data.current.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.current ? <div>{this.state.conversion ? <p>{this.state.data.current.temp_f} °F</p> : <p>{this.state.data.current.temp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.current ? <div>  {this.state.conversion ? <p>Wind: {this.state.data.current.wind_mph} mph {this.state.data.current.wind_dir}</p> : <p> Wind {this.state.data.current.wind_kph} kph {this.state.data.current.wind_dir}</p>} </div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.current ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.current.precip_in} in</p> : <p> Precipitation: {this.state.data.current.precip_mm} mm</p>} </div> : null} </div> : null}

                        {this.state.data.location ? <div>{this.state.forecast1 ? <p>{this.state.forecastDay1}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast1 ? <p>{this.state.data.forecast.forecastday[1].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast1 ? <img src={this.state.data.forecast.forecastday[1].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast1 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[1].day.maxtemp_f} - {this.state.data.forecast.forecastday[1].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[1].day.maxtemp_c} - {this.state.data.forecast.forecastday[1].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast1 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[1].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[1].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast1 ? <div>{this.state.conversion ? <p> Precipitation:{this.state.data.forecast.forecastday[1].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[1].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                        {this.state.data.location ? <div>{this.state.forecast2 ? <p>{this.state.forecastDay2}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast2 ? <p>{this.state.data.forecast.forecastday[2].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast2 ? <img src={this.state.data.forecast.forecastday[2].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast2 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[2].day.maxtemp_f} - {this.state.data.forecast.forecastday[2].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[2].day.maxtemp_c} - {this.state.data.forecast.forecastday[2].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast2 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[2].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[2].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast2 ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.forecast.forecastday[2].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[2].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                        {this.state.data.location ? <div>{this.state.forecast3 ? <p>{this.state.forecastDay3}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast3 ? <p>{this.state.data.forecast.forecastday[3].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast3 ? <img src={this.state.data.forecast.forecastday[3].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast3 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[3].day.maxtemp_f} - {this.state.data.forecast.forecastday[3].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[3].day.maxtemp_c} - {this.state.data.forecast.forecastday[3].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast3 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[3].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[3].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast3 ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.forecast.forecastday[3].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[3].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                        {this.state.data.location ? <div>{this.state.forecast4 ? <p>{this.state.forecastDay4}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast4 ? <p>{this.state.data.forecast.forecastday[4].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast4 ? <img src={this.state.data.forecast.forecastday[4].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast4 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[4].day.maxtemp_f} - {this.state.data.forecast.forecastday[4].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[4].day.maxtemp_c} - {this.state.data.forecast.forecastday[4].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast4 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[4].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[4].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast4 ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.forecast.forecastday[4].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[4].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                        {this.state.data.location ? <div>{this.state.forecast5 ? <p>{this.state.forecastDay5}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast5 ? <p>{this.state.data.forecast.forecastday[5].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast5 ? <img src={this.state.data.forecast.forecastday[5].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast5 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[5].day.maxtemp_f} - {this.state.data.forecast.forecastday[5].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[5].day.maxtemp_c} - {this.state.data.forecast.forecastday[5].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast5 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[5].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[5].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast5 ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.forecast.forecastday[5].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[5].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                        {this.state.data.location ? <div>{this.state.forecast6 ? <p>{this.state.forecastDay6}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast6 ? <p>{this.state.data.forecast.forecastday[6].day.condition.text}</p> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast6 ? <img src={this.state.data.forecast.forecastday[6].day.condition.icon}></img> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast6 ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[6].day.maxtemp_f} - {this.state.data.forecast.forecastday[6].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[6].day.maxtemp_c} - {this.state.data.forecast.forecastday[6].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast6 ? <div>{this.state.conversion ? <p> Wind: {this.state.data.forecast.forecastday[6].day.maxwind_mph} mph</p> : <p> Wind: {this.state.data.forecast.forecastday[6].day.maxwind_kph} kph</p>}</div> : null}</div> : null}
                        {this.state.data.location ? <div>{this.state.forecast6 ? <div>{this.state.conversion ? <p> Precipitation: {this.state.data.forecast.forecastday[6].day.totalprecip_in} in</p> : <p> Precipitation: {this.state.data.forecast.forecastday[6].day.totalprecip_mm} mm</p>}</div> : null}</div> : null}

                    </div >
                    : <h1 style={{padding:'20px'}}>Enter in a location, US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name.   </h1>}
                {this.state.data.location ?
                    <div className="weather">
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: !this.state.current,
                                forecast1: false,
                                forecast2: false,
                                forecast3: false,
                                forecast4: false,
                                forecast5: false,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.day}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.current.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.current.temp_f} °F</p> : <p>{this.state.data.current.temp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: !this.state.forecast1,
                                forecast2: false,
                                forecast3: false,
                                forecast4: false,
                                forecast5: false,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay1}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[1].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[1].day.maxtemp_f} - {this.state.data.forecast.forecastday[1].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[1].day.maxtemp_c} - {this.state.data.forecast.forecastday[1].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: false,
                                forecast2: !this.state.forecast2,
                                forecast3: false,
                                forecast4: false,
                                forecast5: false,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay2}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[2].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[2].day.maxtemp_f} - {this.state.data.forecast.forecastday[2].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[2].day.maxtemp_c} - {this.state.data.forecast.forecastday[2].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: false,
                                forecast2: false,
                                forecast3: !this.state.forecast3,
                                forecast4: false,
                                forecast5: false,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay3}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[3].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[3].day.maxtemp_f} - {this.state.data.forecast.forecastday[3].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[3].day.maxtemp_c} - {this.state.data.forecast.forecastday[3].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: false,
                                forecast2: false,
                                forecast3: false,
                                forecast4: !this.state.forecast4,
                                forecast5: false,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay4}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[4].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[4].day.maxtemp_f} - {this.state.data.forecast.forecastday[4].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[4].day.maxtemp_c} - {this.state.data.forecast.forecastday[4].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: false,
                                forecast2: false,
                                forecast3: false,
                                forecast4: false,
                                forecast5: !this.state.forecast5,
                                forecast6: false
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay5}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[5].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[5].day.maxtemp_f} - {this.state.data.forecast.forecastday[5].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[5].day.maxtemp_c} - {this.state.data.forecast.forecastday[5].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                        <div className="forecast" onClick={() => {
                            this.setState({
                                ...this.state,
                                current: false,
                                forecast1: false,
                                forecast2: false,
                                forecast3: false,
                                forecast4: false,
                                forecast5: false,
                                forecast6: !this.state.forecast6
                            })
                        }}>
                            {this.state.data.location ? <div>{this.state.data ? <p>{this.state.forecastDay6}</p> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <img src={this.state.data.forecast.forecastday[6].day.condition.icon}></img> : null}</div> : null}
                            {this.state.data.location ? <div>{this.state.data ? <div>{this.state.conversion ? <p>{this.state.data.forecast.forecastday[6].day.maxtemp_f} - {this.state.data.forecast.forecastday[6].day.mintemp_f}°F</p> : <p> {this.state.data.forecast.forecastday[6].day.maxtemp_c} - {this.state.data.forecast.forecastday[6].day.mintemp_c} °C</p>}</div> : null}</div> : null}
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};
export default connect(mapStateToProps)(InputSection); 