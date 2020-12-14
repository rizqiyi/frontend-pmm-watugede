import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import errorsReducer from "./errors/error.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  errors: errorsReducer,
});

export default rootReducer;
