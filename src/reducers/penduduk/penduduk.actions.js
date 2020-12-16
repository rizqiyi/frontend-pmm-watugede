import Types from "./penduduk.types";
import axios from "axios";
import {
  initialURL,
  getPendudukById,
  updatePendudukURI,
} from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const fetchPenduduk = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .get(initialURL.pendudukURI, tokenConfig(getState))
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
  dispatch({ type: Types.START_REQUEST });

  axios
    .get(getPendudukById(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_SUCCESS_BY_ID,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const postPenduduk = ({ ...request }) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  const body = JSON.stringify({ ...request });

  axios
    .post(initialURL.pendudukURI, body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_SUCCESS,
        payload: result.data,
      });
      dispatch(returnInfos(result.data.message, result.data.success));
    })
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};

export const patchPenduduk = ({ ...request }, id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  const body = JSON.stringify({ ...request });

  axios
    .put(updatePendudukURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.PUT_PENDUDUK_SUCCESS,
        payload: result.data,
      });
      dispatch(returnInfos(result.data.message, result.status));
    })
    .then(() => dispatch(fetchPendudukById(id)))
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};

export const deletePenduduk = (id, onSuccess) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .delete(updatePendudukURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.DELETE_PENDUDUK_SUCCESS,
        payload: { id, data: result.data },
      });
      dispatch(returnInfos(result.data.message, result.data.success));
    })
    .then(() => onSuccess())
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};
