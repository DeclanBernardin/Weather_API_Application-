import { all } from 'redux-saga/effects';
import weatherDataGrab from'./weatherDataGrab' 

export default function* rootSaga() {
    yield all([
        weatherDataGrab()
    ]);
}