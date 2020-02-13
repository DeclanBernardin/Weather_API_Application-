import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; 
// saga imports 
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather)
}

// takes the input city name / zip code and sends a axios request to the weather API
function* fetchWeather(action) {
        console.log('here is the action payload', action.payload)
        try {
            const response = yield call(fetch, `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${action.payload.search}&days=3`);
            const responseBody = response.json(); 
            console.log('Here is the data', responseBody); 
        } catch (error) {
            console.log('error calling API request')
        }
}

//`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${action.payload.search}&days=3`

// holds the data the weather API sends back 
const firstReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return [];
        case 'SET_SEARCH_DATA':
            return action.payload;
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        firstReducer,
    }),
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
