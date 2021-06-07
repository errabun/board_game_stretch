const gameDetailsReducer = (state = {}, action) => {
  switch(action.type) {
    case "ADD_WISH":
      return action.payload.game;
    default:
      return state;
  }
}

export default gameDetailsReducer;