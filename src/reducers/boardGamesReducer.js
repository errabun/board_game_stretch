const boardGameReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_GAMES": 
            return [...state, action.payload.games]
        default:
            return state;
    }
}

export default boardGameReducer;