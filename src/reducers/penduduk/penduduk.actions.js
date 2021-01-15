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
      dispatch(returnInfos(err.response.data.message, err.response.status));
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
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const searchPendudukByName = (params, condition) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK,
  });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_URI}/all/s?name=${params}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.SEARCH_PENDUDUK_BY_NAME,
        payload: {
          res: result.data.data,
          cond: condition,
        },
      });
      dispatch(returnInfos("", 200));
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "SEARCH_FAILURE"
        )
      );
      dispatch(setLoadingToFalse());
    });
};

export const searchPendudukByNIK = (params, condition) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK,
  });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_URI}/all/nik/s?nik=${params}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.SEARCH_PENDUDUK_BY_NO_NIK,
        payload: {
          res: result.data.data,
          cond: condition,
        },
      });
      dispatch(returnInfos("", 200));
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "SEARCH_FAILURE"
        )
      );
      dispatch(setLoadingToFalse());
    });
};

export const searchPendudukByNomorKK = (params, condition) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK,
  });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_URI}/s/kk?no_kk=${params}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.SEARCH_PENDUDUK_BY_NO_KK,
        payload: {
          res: result.data.data,
          cond: condition,
          no_kk: params,
        },
      });
      dispatch(returnInfos("", 200));
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "SEARCH_FAILURE"
        )
      );
      dispatch(setLoadingToFalse());
    });
};

export const clearSearchResultPenduduk = () => {
  return {
    type: Types.CLEAR_SEARCH_PENDUDUK_RESULT,
  };
};

export const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_PENDUDUK_TO_FALSE,
  };
};
