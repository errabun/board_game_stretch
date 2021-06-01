export const removeWish = (id) => {
    return {
        type: 'REMOVEWISH',
        payload: {
            id
        }
    }
}

export const addWish = (game) => {
    return {
        type: "ADDWISH",
        payload: {
            game
        }
    }
}

export const addGames = (games) => {
    return {
        type: "ADDGAME",
        payload: {
            games
        }
    }
} 