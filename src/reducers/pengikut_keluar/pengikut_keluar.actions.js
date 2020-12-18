import Types from "./pengikut_keluar.types";
import axios from "axios";
import {
  postPengikutKeluarURI,
  getPengikutKeluarURI,
  postKeteranganKeluarURI,
  getKeteranganKeluarURI,
} from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const getPengikutKeluar = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .get(getPengikutKeluarURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENGIKUT_KELUAR_SUCCESS,
        payload: {
          pengikut_keluar: result.data,
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const getKeteranganKeluar = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .get(getKeteranganKeluarURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KETERANGAN_KELUAR_SUCCESS,
        payload: {
          keterangan_keluar: result.data,
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const postPengikutKeluar = ({ ...request }, id) => (
  dispatch,
  getState
) => {
  dispatch({ type: Types.START_REQUEST });

  const body = JSON.stringify({ ...request });

  axios
    .post(postPengikutKeluarURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_PENGIKUT_KELUAR_SUCCESS,
        payload: {
          pengikut_keluar_obj: result.data,
        },
      });
      dispatch(returnInfos(result.data.message, 200, "POST_PENGIKUT_KELUAR"));
    })
    .then(() => {
      dispatch(getPengikutKeluar(id));
      dispatch(getKeteranganKeluar(id));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const postKeteranganKeluar = (request, id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .post(postKeteranganKeluarURI(id), request, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_KETERANGAN_KELUAR_SUCCESS,
        payload: {
          keterangan_keluar_obj: result.data,
        },
      });
      dispatch(returnInfos(result.data.message, 200, "POST_KETERANGAN_KELUAR"));
    })
    .then(() => {
      dispatch(getPengikutKeluar(id));
      dispatch(getKeteranganKeluar(id));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};
