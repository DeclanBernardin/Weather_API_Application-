import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* weatherGrab(action)
{
    try{
        console.log('this is the payload', action.payload)
        const response = yield axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${action.payload.location}&days=${action.payload.forecast}`);
    console.log(response)
    yield put ({
        type: 'ADD_DATA',
        payload: response.data
    })
    } catch (error) {
        console.log(error)
    }
}

function* weatherDataGrab() {
    yield takeLatest('FIND_WEATHER', weatherGrab)
}
export default weatherDataGrab; 