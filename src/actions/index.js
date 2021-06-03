export const removeWish = (id) => {
    return {
        type: 'REMOVE_WISH',
        payload: {
            id
        }
    }
}

export const addWish = (game) => {
    return {
        type: "ADD_WISH",
        payload: {
            game
        }
    }
}

export const addGames = (games) => {
    return {
        type: "ADD_GAMES",
        payload: {
            games
        }
    }
} 

export const selectGame = (game) => ({
    type: "SELECT_GAME",
    payload: {
        game
    }
})

export const addVideos = (game) => ({
    type: "ADD_VIDEO",
    payload: {
        game
    }
})