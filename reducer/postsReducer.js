let defaultState = {
  posts: [],
  allposts: [],
};

let postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALLPOST": {
      let newState = { ...state };
      newState.posts = action.payload;

      return newState;
    }

    case "ADD_POST": {
      let newState = { ...state };
      newState.allposts.push(action.payload);
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default postReducer;
