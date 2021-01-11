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
        payload: { data: result.data.data, id: result.data.data._id },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const postPenduduk = ({ ...request }) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_PENDUDUK });

  const body = JSON.stringify({ ...request });

  axios
    .post(`${process.env.REACT_APP_PENDUDUK_URI}`, body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_SUCCESS,
        payload: result.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};

export const patchPenduduk = ({ ...request }, id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_PENDUDUK });

  const body = JSON.stringify({ ...request });

  axios
    .put(
      `${process.env.REACT_APP_PENDUDUK_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_PENDUDUK_SUCCESS,
        payload: { data: result.data.data, id: result.data.data._id },
      });
      dispatch(
        returnInfos(result.data.message, result.status, "UPDATED_PENDUDUK")
      );
    })
    .then(() => dispatch(fetchPendudukById(id)))
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};

export const deletePenduduk = (id, onSuccess) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_PENDUDUK });

  axios
    .delete(
      `${process.env.REACT_APP_PENDUDUK_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_PENDUDUK_SUCCESS,
        payload: { id, data: result.data },
      });
      dispatch(returnInfos(result.data.message, 200, "DELETE_SUCCESS"));
    })
    .then(() => onSuccess())
    .catch((err) => {
      returnInfos(err.response.message, err.response.status);
    });
};
