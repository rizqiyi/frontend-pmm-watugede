import Types from "./penduduk.types";
import axios from "axios";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const fetchPenduduk = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_PENDUDUK });

  axios
    .get(`${process.env.REACT_APP_PENDUDUK_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const fetchPendudukById = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_PENDUDUK });

  axios
    .get(`${process.env.REACT_APP_PENDUDUK_URI}/${id}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_SUCCESS_BY_ID,
        payload: {
          data_kk: result.data.data ? result.data.data.keluarga_dari : [],
          data_penduduk: result.data.data,
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};
