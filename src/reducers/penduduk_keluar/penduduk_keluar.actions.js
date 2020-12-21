import Types from "./penduduk_keluar.types";
import axios from "axios";
import {
  getKeteranganKeluarURI,
  getPengikutKeluarURI,
  initialURL,
  updatePengikutKeluarURI,
} from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const fetchPendudukKeluar = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KELUAR });

  axios
    .get(initialURL.pendudukKeluarURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const getPengusulKeluarByID = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KELUAR });

  axios
    .get(getPengikutKeluarURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};
export const getPendudukKeluarByID = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KELUAR });

  axios
    .get(getPengikutKeluarURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENGIKUT_KELUAR_DETAILS,
        payload: result.data.data.pengikut_keluar,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const getKeteranganKeluarByID = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KELUAR });

  axios
    .get(getKeteranganKeluarURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KETERANGAN_KELUAR_DETAIL_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const updatePengikutKeluar = (
  { ...request },
  idPenduduk,
  idPengikut
) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KELUAR,
  });

  const body = JSON.stringify({ ...request });

  axios
    .put(
      updatePengikutKeluarURI(idPenduduk, idPengikut),
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_PENGIKUT_KELUAR_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => {
      dispatch(getPendudukKeluarByID(idPenduduk));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};
