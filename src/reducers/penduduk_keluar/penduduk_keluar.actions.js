import Types from "./penduduk_keluar.types";
import axios from "axios";
import {
  initialURL,
  postPendudukKeluarURI,
  getPendudukKeluarByIdURI,
  postKeteranganKeluarURI,
  deletePendudukKeluarURI,
  deleteAllDataPendudukKeluarURI,
} from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const getAllDataPendudukKeluar = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .get(initialURL.pendudukKeluarURI, tokenConfig(getState))
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
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .get(getPendudukKeluarByIdURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID,
        payload: {
          someData: result.data.data.penduduk_keluar_desa
            ? result.data.data.penduduk_keluar_desa
            : {},
          keterangan: result.data.data
            ? result.data.data.keterangan_keluar_desa
            : {},
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
    .post(postKeteranganKeluarURI(id), request, tokenConfig(getState))
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
    .post(postPendudukKeluarURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.message,
      });
      dispatch(
        returnInfos(result.data.message, 201, "POST_PENGIKUT_KELUAR_SUCCESS")
      );
    })
    .catch((err) => {
      dispatch(isLoadingToFalse());
      dispatch(returnInfos(err.response.data.message, err.response.status));
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
      deletePendudukKeluarURI(idPenduduk, idDataKeluar),
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

export const deleteAllDataPendudukKeluar = (id, onSuccess) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .delete(deleteAllDataPendudukKeluarURI(id), tokenConfig(getState))
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
