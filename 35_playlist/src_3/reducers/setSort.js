const sortReducer = ( state, action) => {

  const initialState = {
    field: "song",
    reverse: false
  }

  let newState = { ...state}

  if (action.type === "SETSORTFIELD") {
      if (action.payload != null) {
      newState.field = action.payload;
      } else {
        newState.field = "song"
      }
      return newState;
  }

  if (action.type === "SETREVERSESORT") {
    if (action.payload == null) {
      newState.reverse = false;
    } else {
      newState.reverse = !action.payload;
    }

    return newState;
  }

  return initialState;

}

export default sortReducer;

