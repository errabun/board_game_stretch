const gameDetailsReducer = (state = {}, action) => {
  switch(action.type) {
    case "SELECT_GAME":
      return action.payload.game;
    default:
      return state;
  }
}

export default gameDetailsReducer;