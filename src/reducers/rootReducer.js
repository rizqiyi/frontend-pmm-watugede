import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import infoReducer from "./infos/info.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pendudukReducer } from "./penduduk/penduduk.reducer";
import { kartuKeluargaReducer } from "./kartu_keluarga/kartu_keluarga.reducers";
import { anggotaKeluargaReducer } from "./anggota_keluarga/anggota_keluarga.reducer";
import { pendudukKeluarReducer } from "./penduduk_keluar/penduduk_keluar.reducer";
import { pendudukMasukReducer } from "./penduduk_masuk/penduduk_masuk.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  infos: infoReducer,
  penduduks: pendudukReducer,
  kartu_keluarga: kartuKeluargaReducer,
  anggota_keluarga: anggotaKeluargaReducer,
  penduduk_keluar: pendudukKeluarReducer,
  penduduk_masuk: pendudukMasukReducer,
});

const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["users"] },
  rootReducer
);

export default persistedReducer;
