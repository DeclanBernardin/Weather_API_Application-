import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'; 
import { Provider } from 'react-redux'; 

const firstReducer = (state ={}, action) => {
    if(action.type === 'reducerTest'){
    console.log('reducer test')
    }
    return state; 
}


const storeInstance = createStore (
    combineReducers({
        firstReducer,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
