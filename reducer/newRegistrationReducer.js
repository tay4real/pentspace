let defaultState = {
  signUp: {
    email: "",
    password: "",
  },
  tokens: null,
};

let newRegistrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SIGN_UP": {
      let newState = { ...state };
      newState.signUp = action.payload.signUp;
      newState.tokens = action.payload.tokens;
      console.log(newState);
      return newState;
    }

    case "CLEAR_SIGN_UP": {
      let newState = { ...state };
      newState.signUp.email = "";
      newState.signUp.password = "";
      return newState;
    }

    default:
      return state;
  }
};

export default newRegistrationReducer;
