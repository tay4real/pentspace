let defaultState = {
  successMsg: "",
  errorMsg: "",
};

let alertReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ALERT_MSG": {
      let newState = { ...state };
      newState.success = action.payload.successMsg;
      newState.error = action.payload.errorMsg;
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default alertReducer;
