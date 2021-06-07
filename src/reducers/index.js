import wishListReducer from './wishListReducer';
import boardGameReducer from './boardGamesReducer';
import gameDetailsReducer from './gameDetailsReducer';
import wishShowReducer from './wishShowReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    wishList: wishListReducer,
    boardGames: boardGameReducer,
    gameDetails: gameDetailsReducer,
    wishShow: wishShowReducer
})

export default rootReducer;