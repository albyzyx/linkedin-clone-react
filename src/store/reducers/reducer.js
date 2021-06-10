import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  errorState: errorReducer,
});

export default rootReducer;
