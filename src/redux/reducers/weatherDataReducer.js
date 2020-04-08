const weatherDataReducer = (state = [] , action) => {
    switch(action.type){
        case 'ADD_DATA':
            return action.payload;
        default: 
        return state; 
    }
}

export default weatherDataReducer; 