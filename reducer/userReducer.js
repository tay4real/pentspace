let defaultState = {
  user: null,
  userCategory: "",
  allusers: [],
};

let userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      let newState = { ...state };
      newState.user = action.payload;

      return newState;
    }

    case "SET_USER_CATEGORY": {
      let newState = { ...state };
      newState.userCategory = action.payload;

      return newState;
    }

    case "GET_ALLUSERS": {
      let newState = { ...state };
      newState.allusers = action.payload;

      return newState;
    }

    default:
      return state;
  }
};

export default userReducer;
