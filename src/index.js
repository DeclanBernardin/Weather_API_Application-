import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios'; 
// saga imports 
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather)
}

// takes the input city name / zip code and sends a axios request to the weather API
function* fetchWeather(action) {
    try {
        let response = yield axios.post('/api/search/', action.payload)
        yield console.log(response.data)
        yield put({ type: 'SET_SEARCH_DATA', payload: response.data })
    } catch (error) {
        yield console.log('error on GET route from server', error)
    }
}

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
