const wishListReducer = (state = [], action) {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload.game]
        case "REMOVE": {
            return state.filter(game => game.id !== action.payloag.id)
        }
        default:
            return state;
    }
}

export default wishListReducer;