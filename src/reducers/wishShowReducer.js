const wishShowReducer = (state = {show: false, added: ''}, action) => {
  switch(action.type) {
    case "ADD_WISH":
      return {show: true, added: true};
    case "REMOVE_WISH":
      return {show: true, added: false};
    case "REMOVE_POPUP":
      return {show: false, added: ''};
    default:
      return state;
  }
}

export default wishShowReducer;