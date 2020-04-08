const dayReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DAY':
            return action.payload;
        default:
            return state;
    }
}

export default dayReducer; 