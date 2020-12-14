import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import errorsReducer from "./errors/error.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  users: usersReducer,
  errors: errorsReducer,
});

const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["users"] },
  rootReducer
);

export default persistedReducer;
