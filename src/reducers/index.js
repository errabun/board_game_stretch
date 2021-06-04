import wishListReducer from './wishListReducer';
import boardGameReducer from './boardGamesReducer';
import gameDetailsReducer from './gameDetailsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    wishList: wishListReducer,
    boardGames: boardGameReducer,
    gameDetails: gameDetailsReducer
})

export default rootReducer;