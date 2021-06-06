const boardGameReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_GAMES":
            action.payload.games.forEach(game => {
                game.isWished = false;
            });
            return [...state, ...action.payload.games]
        case 'ADD_WISH':
            return state.filter(game => {
                if(game.id !== action.payload.game.id) {
                    return game
                }
                game.isWished = true;
                return game;
            })
        case "REMOVE_WISH":            
            return state.filter(game => {
                if(game.id !== action.payload.id) {
                    return game
                } 
                game.isWished = false;
                return game;
            })
        default:
            return state;
    }
}

export default boardGameReducer;
