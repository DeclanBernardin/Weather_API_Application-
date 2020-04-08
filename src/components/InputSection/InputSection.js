import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'



class InputSection extends Component {

    state = {
        location: '',
        forecast: 7,
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
       }, 1000); 
        
    }

    handleWeekday() {

        let day1 = ''
        let day = ''
        if (this.props.reduxStore.weatherData.location){
            let weekdays = new Date(this.props.reduxStore.weatherData.location.localtime);
            day1 = weekdays.getDay()
            console.log('This is the first day', day1)
        }else {
            console.log('error with weekday')
        }

        if (day1 === 0){
            day = 'Sunday';
        }else if (day1 === 1){
            day = 'Monday'; 
        }else if (day1 === 2){
            day = 'Tuesday'; 
        }else if (day1 === 3){
            day = 'Wednesday'; 
        }else if (day1 === 4){
            day = 'Thursday'; 
        }else if (day1 === 5){
            day = 'Friday';
        }else {
            day = 'Saturday'; 
        }
        console.log('today is', day)

        this.props.dispatch({
            type: 'ADD_DAY',
            payload: day
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

                {/* when pressed it takes the info collected from the inputs and sends them to the findWeather function */}
                <Button
                    onClick={this.findWeather}
                    style={{ color: '#FEFFFF', margin: '30px', fontSize: '30px' }}
                >Find The Weather</Button>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};
export default connect(mapStateToProps) (InputSection); 