import { combineReducers } from 'redux';
import weatherData from './weatherDataReducer';
import dayReducer from './dayReducer'


const rootReducer = combineReducers({
    weatherData,
    dayReducer
});

export default rootReducer;
