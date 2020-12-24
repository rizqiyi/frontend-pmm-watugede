const baseURL = "http://localhost:5000/";

const initialURL = {
  loginURI: `${baseURL}api/auth/admin`,
  adminData: `${baseURL}api/auth`,
  activityURI: `${baseURL}api/activity`,
  kelahiranURI: `${baseURL}api/kelahiran`,
  kematianURI: `${baseURL}api/kematian`,
  pendudukURI: `${baseURL}api/penduduk`,
  kartuKeluargaURI: `${baseURL}api/penduduk/k`,
  pendudukKeluarURI: `${baseURL}api/penduduk_keluar`,
  pendudukMasukURI: `${baseURL}api/penduduk_masuk`,
  getAndPostKartuKeluargaURI: `${baseURL}api/kartu_keluarga`,
  keteranganURI: `${baseURL}api/keterangan`,
};

const getPendudukById = (id) => `${initialURL.pendudukURI}/${id}`;
const updatePendudukURI = (id) => `${initialURL.pendudukURI}/${id}`;
const postPendudukToKKURI = (id) => `${initialURL.pendudukURI}/${id}`;
const postPengikutKeluarURI = (id) => `${initialURL.pendudukKeluarURI}/${id}`;
const getPengikutKeluarURI = (id) => `${initialURL.pendudukKeluarURI}/${id}`;
const postKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/${id}`;
const getKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/p/${id}`;
const updatePengikutKeluarURI = (idPenduduk, idPengikut) =>
  `${initialURL.pendudukKeluarURI}/${idPenduduk}/u/${idPengikut}`;
const deletePengikutKeluarURI = (idPenduduk, idPengikut) =>
  `${initialURL.pendudukKeluarURI}/${idPenduduk}/d/${idPengikut}`;
const searchKKByName = (params) => `${initialURL.pendudukURI}/s?name=${params}`;
const searchKKByNomorKK = (params) =>
  `${initialURL.pendudukURI}/s/kk?no_kk=${params}`;
const getKartuKeluargaById = (id) => `${initialURL.kartuKeluargaURI}/${id}`;

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
  deletePengikutKeluarURI,
  searchKKByName,
  searchKKByNomorKK,
  getKartuKeluargaById,
  postPendudukToKKURI,
};
