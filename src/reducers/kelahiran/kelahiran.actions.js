import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./kelahiran.types";

export const fetchKelahiran = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  axios
    .get(`${process.env.REACT_APP_KELAHIRAN_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KELAHIRAN_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const fetchKelahiranId = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  axios
    .get(`${process.env.REACT_APP_KELAHIRAN_URI}/${id}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KELAHIRAN_BY_ID_SUCCESS,
        payload: {
          kelahiran: result.data.data ? result.data.data : [],
          data_ayah: result.data.data ? result.data.data.data_ayah : [],
          data_ibu: result.data.data ? result.data.data.data_ibu : [],
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      if (err.response.status === 404) dispatch(setLoadingToFalse());
    });
};

export const postKelahiran = ({ ...requests }, onSuccess) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(`${process.env.REACT_APP_KELAHIRAN_URI}`, body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_KELAHIRAN_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 201));
    })
    .then(() => onSuccess())
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingToFalse());
    });
};

export const updateKelahiran = ({ ...requests }, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .put(
      `${process.env.REACT_APP_KELAHIRAN_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_KELAHIRAN_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200, "UPDATE"));
    })
    .then(() => dispatch(fetchKelahiranId(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteDataKelahiran = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  axios
    .delete(
      `${process.env.REACT_APP_KELAHIRAN_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_KELAHIRAN_SUCCESS,
        payload: id,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(fetchKelahiranId(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_KELAHIRAN,
  };
};
