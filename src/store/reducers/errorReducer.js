import { SET_ERROR } from "../actions/actionType";

const INITIAL_STATE = {
  error: null,
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default errorReducer;
