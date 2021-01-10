import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistedReducer from "../reducers/rootReducer";

let store = createStore(
  persistedReducer,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { store, persistor };
