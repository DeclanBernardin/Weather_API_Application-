import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* weatherGrab(action)
{
    try{
        const response = yield axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&days=${this.state.forecast}`);
    }
}