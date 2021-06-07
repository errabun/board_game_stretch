const wishShowReducer = (state = {show: false, added: ''}, action) => {
  switch(action.type) {
    case "ADD_WISH":
      return {show: true, added: 'added to'};
    case "REMOVE_WISH":
      return {show: true, added: 'removed from'};
    case "REMOVE_POPUP":
      return {show: false, added: ''};
    default:
      return state;
  }
}

export default wishShowReducer;