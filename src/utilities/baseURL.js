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
  pendudukMasukURI: `${baseURL}api/penduduk_masuk/k`,
  getPendudukMasuk: `${baseURL}api/penduduk_masuk`,
  getAndPostKartuKeluargaURI: `${baseURL}api/kartu_keluarga`,
  keteranganURI: `${baseURL}api/keterangan`,
};

const getPendudukById = (id) => `${initialURL.pendudukURI}/${id}`;
const updatePendudukURI = (id) => `${initialURL.pendudukURI}/${id}`;
const deletePendudukPadaKK = (idPenduduk, idKK) =>
  `${initialURL.pendudukURI}/${idPenduduk}/d/${idKK}`;
const postPendudukToKKURI = (id) => `${initialURL.pendudukURI}/${id}`;
const postPendudukKeluarURI = (id) => `${initialURL.pendudukKeluarURI}/${id}`;
const postManyPendudukKeluarURI = (id) =>
  `${initialURL.pendudukKeluarURI}/${id}/m`;
const getPendudukKeluarByIdURI = (id) =>
  `${initialURL.pendudukKeluarURI}/${id}`;
const postKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/${id}`;
const getKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/p/${id}`;
const updatePengikutKeluarURI = (idPenduduk, idPengikut) =>
  `${initialURL.pendudukKeluarURI}/${idPenduduk}/u/${idPengikut}`;
const deletePendudukKeluarURI = (idPenduduk, idPengikut) =>
  `${initialURL.pendudukKeluarURI}/${idPenduduk}/d/${idPengikut}`;
const deleteAllDataPendudukKeluarURI = (idData) =>
  `${initialURL.pendudukKeluarURI}/${idData}/d`;
const searchKKByName = (params) => `${initialURL.pendudukURI}/s?name=${params}`;
const searchKKByNomorKK = (params) =>
  `${initialURL.pendudukURI}/s/kk?no_kk=${params}`;
const updateKeteranganKeluarURI = (id) => `${initialURL.keteranganURI}/${id}`;
const deleteKeteranganKeluarURI = (idDataKeluar, idKeterangan) =>
  `${initialURL.keteranganURI}/${idDataKeluar}/d/${idKeterangan}`;
const getKartuKeluargaById = (id) => `${initialURL.kartuKeluargaURI}/${id}`;
const postKartuKeluargaPendudukMasuk = () =>
  `${initialURL.getAndPostKartuKeluargaURI}/in`;
const fetchPendudukMasukByID = (id) => `${initialURL.getPendudukMasuk}/${id}`;
const updateKeteranganMasukURI = (id) => `${initialURL.getPendudukMasuk}/${id}`;
const postKeteranganMasukURI = (id) => `${initialURL.getPendudukMasuk}/${id}/p`;

export {
  baseURL,
  initialURL,
  getPendudukById,
  updatePendudukURI,
  postPendudukKeluarURI,
  getPendudukKeluarByIdURI,
  postKeteranganKeluarURI,
  getKeteranganKeluarURI,
  updatePengikutKeluarURI,
  deletePendudukKeluarURI,
  searchKKByName,
  searchKKByNomorKK,
  getKartuKeluargaById,
  postPendudukToKKURI,
  deletePendudukPadaKK,
  deleteAllDataPendudukKeluarURI,
  updateKeteranganKeluarURI,
  deleteKeteranganKeluarURI,
  postManyPendudukKeluarURI,
  postKartuKeluargaPendudukMasuk,
  fetchPendudukMasukByID,
  postKeteranganMasukURI,
  updateKeteranganMasukURI,
};
