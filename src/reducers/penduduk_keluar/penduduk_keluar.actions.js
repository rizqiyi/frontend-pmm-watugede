import Types from "./penduduk_keluar.types";
import axios from "axios";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";
import { getKartuKeluargaByID } from "../kartu_keluarga/kartu_keluarga.actions";
import { fetchAnggotaKeluargaByID } from "../anggota_keluarga/anggota_keluarga.actions";

export const getAllDataPendudukKeluar = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .get(`${process.env.REACT_APP_PENDUDUK_KELUAR_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const getPendudukKeluarById = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KETERANGAN_KELUAR,
  });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_KELUAR_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID,
        payload: {
          someData: result.data.data.penduduk_keluar_desa
            ? result.data.data.penduduk_keluar_desa
            : {},
          keterangan: result.data.data.keterangan_keluar_desa
            ? result.data.data.keterangan_keluar_desa
            : [],
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postKeteranganKeluar = (request, id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .post(
      `${process.env.REACT_APP_KETERANGAN_KELUAR_URI}/${id}`,
      request,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_KETERANGAN_KELUAR_SUCCESS,
        payload: result.data.data,
      });
      dispatch(
        returnInfos(
          "Sukses Menambahkan Keterangan Keluar",
          201,
          "POST_KETERANGAN_SUCCESS"
        )
      );
    })
    .then(() => dispatch(getPendudukKeluarById(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postPendudukKeluarData = (value, id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  const body = JSON.stringify({ no_kk: value });

  axios
    .post(
      `${process.env.REACT_APP_PENDUDUK_KELUAR_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.message,
      });
      dispatch(
        returnInfos(result.data.message, 201, "POST_PENGIKUT_KELUAR_SUCCESS")
      );
    })
    .then(() => dispatch(fetchAnggotaKeluargaByID(id)))
    .catch((err) => {
      dispatch(isLoadingToFalse());
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postManyPendudukKeluar = (idKK) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  const body = JSON.stringify({ idKK });

  axios
    .post(
      `${process.env.REACT_APP_PENDUDUK_KELUAR_URI}/${idKK}/m`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_MANY_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.message,
      });

      dispatch(
        returnInfos(
          result.data.message,
          201,
          "POST_MANY_PENDUDUK_KELUAR_SUCCESS"
        )
      );
    })
    .then(() => dispatch(getKartuKeluargaByID(idKK)))
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "FAIL_POST_MANY_PENDUDUK_KELUAR"
        )
      );
    });
};

export const deletePendudukKeluar = (idPenduduk, idDataKeluar) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .delete(
      `${process.env.REACT_APP_PENDUDUK_KELUAR_URI}/${idPenduduk}/d/${idDataKeluar}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_PENDUDUK_KELUAR_SUCCESS,
        payload: idPenduduk,
      });
    })
    .then(() => dispatch(getPendudukKeluarById(idDataKeluar)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const updateKeteranganKeluar = (request, id, idPendudukKeluar) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .put(
      `${process.env.REACT_APP_KETERANGAN_KELUAR_URI}/${id}`,
      request,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.UPDATE_KETERANGAN_KELUAR_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(getPendudukKeluarById(idPendudukKeluar)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteKeteranganKeluar = (idDataKeluar, idKeterangan) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .delete(
      `${process.env.REACT_APP_KETERANGAN_KELUAR_URI}/${idDataKeluar}/d/${idKeterangan}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_KETERANGAN_KELUAR_SUCCESS,
        payload: result.data.message,
      });
      dispatch(
        returnInfos(result.data.message, 200, "DELETE_KETERANGAN_SUCCESS")
      );
    })
    .then(() => dispatch(getPendudukKeluarById(idDataKeluar)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteAllDataPendudukKeluar = (id, onSuccess) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .delete(
      `${process.env.REACT_APP_PENDUDUK_KELUAR_URI}/${id}/d`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_ALL_DATA_PENDUDUK_KELUAR_SUCCESS,
        payload: id,
      });
    })
    .then(() => onSuccess())
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

const isLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_PENDUDUK_KELUAR,
  };
};
