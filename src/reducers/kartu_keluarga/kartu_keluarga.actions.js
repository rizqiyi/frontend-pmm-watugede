import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./kartu_keluarga.types";

export const postKartuKeluarga = ({ ...request }) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  const body = JSON.stringify({ ...request });

  axios
    .post(
      `${process.env.REACT_APP_KARTU_KELUARGA_URI}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_KARTU_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
      dispatch({
        type: Types.GET_KK_ID,
        payload: result.data.data ? result.data.data.keluarga_dari : "",
      });
    })
    .catch((err) => {
      dispatch(setLoadingToFalse());
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const getKartuKeluargaByID = (id) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(
      `${process.env.REACT_APP_KARTU_KELUARGA_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.FETCH_KARTU_KELUARGA_SUCCESS_BY_ID,
        payload: result.data.data ? result.data.data.anggota_keluarga : [],
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const getAllKartuKeluarga = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(`${process.env.REACT_APP_KARTU_KELUARGA_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KARTU_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const searchKKbyName = (params, cond) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_URI}/s?name=${params}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch(returnInfos("", 200, null));
      dispatch({
        type: Types.SEARCH_KK_BY_NAME,
        payload: {
          res: result.data.data,
          cond,
        },
      });
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.message,
          err.response.status,
          "SEARCH_BY_NAME_NOT_FOUND"
        )
      );
      dispatch(clearResultSearch());
    });
};

export const searchKKbyNomorKK = (params, cond) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(
      `${process.env.REACT_APP_PENDUDUK_URI}/s/kk?no_kk=${params}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch(returnInfos("", 200, null));
      dispatch({
        type: Types.SEARCH_KK_NO_KK,
        payload: {
          res: result.data.data,
          cond,
        },
      });
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.message,
          err.response.status,
          "SEARCH_BY_NIK_NOT_FOUND"
        )
      );

      dispatch(clearResultSearch());
    });
};

export const clearResultSearch = () => {
  return {
    type: Types.CLEAR_SEARCH_RESULT,
  };
};

export const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE,
  };
};
