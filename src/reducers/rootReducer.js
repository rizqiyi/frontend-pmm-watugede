import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import infoReducer from "./infos/info.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pendudukReducer } from "./penduduk/penduduk.reducer";
import { pengikutKeluarReducer } from "./pengikut_keluar/pengikut_keluar.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  infos: infoReducer,
  penduduks: pendudukReducer,
  pengikut_keluar: pengikutKeluarReducer,
});

const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["users"] },
  rootReducer
);

export default persistedReducer;
