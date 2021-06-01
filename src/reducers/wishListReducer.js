const wishListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDWISH':
            return [...state, action.payload.game]
        case "REMOVEWISH": {
            return state.filter(game => game.id !== action.payloag.id)
        }
        default:
            return state;
    }
}

export default wishListReducer;