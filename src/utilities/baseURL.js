const baseURL = "http://localhost:5000/";

const initialURL = {
  loginURI: `${baseURL}api/auth/admin`,
  adminData: `${baseURL}api/auth`,
  activityURI: `${baseURL}api/activity`,
  kelahiranURI: `${baseURL}api/kelahiran`,
  kematianURI: `${baseURL}api/kematian`,
  pendudukURI: `${baseURL}api/penduduk`,
  pendudukKeluarURI: `${baseURL}api/penduduk_keluar`,
  pendudukMasukURI: `${baseURL}api/penduduk_masuk`,
  keteranganURI: `${baseURL}api/keterangan`,
};

const getPendudukById = (id) => `${initialURL.pendudukURI}/${id}`;
const updatePendudukURI = (id) => `${initialURL.pendudukURI}/${id}`;
const postPengikutKeluarURI = (id) => `${initialURL.pendudukKeluarURI}/${id}`;
const getPengikutKeluarURI = (id) => `${initialURL.pendudukKeluarURI}/${id}`;
const postKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/${id}`;
const getKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/p/${id}`;
const updatePengikutKeluarURI = (idPenduduk, idPengikut) =>
  `${initialURL.pendudukKeluarURI}/${idPenduduk}/u/${idPengikut}`;

export {
  baseURL,
  initialURL,
  getPendudukById,
  updatePendudukURI,
  postPengikutKeluarURI,
  getPengikutKeluarURI,
  postKeteranganKeluarURI,
  getKeteranganKeluarURI,
  updatePengikutKeluarURI,
};
