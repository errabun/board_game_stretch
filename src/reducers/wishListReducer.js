const wishListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_WISH':
            return [...state, action.payload.game]
        case "REMOVE_WISH": {
            return state.filter(game => game.id !== action.payload.id)
        }
        default:
            return state;
    }
}

export default wishListReducer;