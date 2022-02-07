export const setAlert = (data, dispatch) =>
  dispatch({
    type: "ALERT_MSG",
    payload: data,
  });

export const startRegistration = (data, dispatch) =>
  dispatch({
    type: "SIGN_UP",
    payload: data,
  });

export const completeRegistration = (user, dispatch) =>
  dispatch({
    type: "LOGGED_IN",
    payload: user,
  });

export const clearSignUp = () =>
  dispatch({
    type: "CLEAR_SIGN_UP",
  });

export const setUserCategory = (user_category, dispatch) =>
  dispatch({
    type: "SET_USER_CATEGORY",
    payload: user_category,
  });
