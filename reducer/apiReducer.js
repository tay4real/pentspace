let defaultState = {
  apiBaseURL: null,
};

let apiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_BASEURL": {
      let newState = { ...state };
      newState.apiBaseURL = action.payload;
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default apiReducer;
