import { combineReducers } from "redux";

import apiReducer from "./apiReducer";
import userReducer from "./userReducer";
import newRegistrationReducer from "./newRegistrationReducer";
import alertReducer from "./alertReducer";
import postReducer from "./postsReducer";

let reducers = combineReducers({
  apiReducer: apiReducer,
  userReducer: userReducer,
  newRegistrationReducer: newRegistrationReducer,
  alertReducer: alertReducer,
  postReducer: postReducer,
});

const rootReducers = (state, action) => {
  return reducers(state, action);
};

export default rootReducers;
