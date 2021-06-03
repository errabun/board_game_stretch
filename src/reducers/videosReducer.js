const videosReducer = (state = {}, action) => {
  switch(action.type) {
    case "ADD_VIDEO":
      return action.payload.game;
    default:
      return state;
  }
}

export default videosReducer;