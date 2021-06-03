import wishListReducer from './wishListReducer';
import boardGameReducer from './boardGamesReducer';
import gameDetailsReducer from './gameDetailsReducer';
import videosReducer from './videosReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    wishList: wishListReducer,
    boardGames: boardGameReducer,
    gameDetails: gameDetailsReducer,
    gameVideos: videosReducer
})

export default rootReducer;