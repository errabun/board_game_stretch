const boardGameReducer = (state = [], action) => {
    switch(action.type) {
        case "ADDGAMES": 
            return [...state, action.payload.games]
        default:
            return state;
    }
}

export default boardGameReducer;