import wishListReducer from './wishListReducer';
import boardGameReducer from './boardGamesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    wishList: wishListReducer,
    boardGames: boardGameReducer
})

export default rootReducer;