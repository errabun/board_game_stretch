const wishShowReducer = (state = false, action) => {
  switch(action.type) {
    case "ADD_WISH":
      return true;
    case "REMOVE_WISH":
      return true;
    case "REMOVE_POPUP":
      return false;
    default:
      return state;
  }
}

export default wishShowReducer;