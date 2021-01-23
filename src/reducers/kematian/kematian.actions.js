import Types from "./kematian.types";
import axios from "axios";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";
import { fetchAnggotaKeluargaByID } from "../anggota_keluarga/anggota_keluarga.actions";

export const fetchDataKematian = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .get(`${process.env.REACT_APP_KEMATIAN_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const getDataKematianById = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .get(`${process.env.REACT_APP_KEMATIAN_URI}/${id}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KEMATIAN_BY_ID_SUCCESS,
        payload: {
          kematian: result.data.data ? result.data.data : [],
          child: result.data.data ? result.data.data.pemilik_data : [],
          arsip: result.data.data ? result.data.data.arsip_kematian : [],
          signature: result.data.data ? result.data.data.signatures : [],
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingToFalse());
    });
};

export const postKematian = ({ ...requests }, id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(
      `${process.env.REACT_APP_KEMATIAN_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 201));
    })
    .then(() => dispatch(fetchAnggotaKeluargaByID(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingToFalse());
    });
};

export const postArsipKematian = (request, id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .post(
      `${process.env.REACT_APP_ARSIP_KEMATIAN_URI}/${id}`,
      request,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_ARSIP_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(getDataKematianById(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const updateArsipKematian = (request, id, idData) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .put(
      `${process.env.REACT_APP_ARSIP_KEMATIAN_URI}/${id}`,
      request,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_ARSIP_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(getDataKematianById(idData)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteArsipKematian = (id, idKematian) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .delete(
      `${process.env.REACT_APP_ARSIP_KEMATIAN_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_ARSIP_KEMATIAN_SUCCESS,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(getDataKematianById(idKematian)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const updateDataKematian = ({ ...requests }, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .put(
      `${process.env.REACT_APP_KEMATIAN_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => {
      dispatch(getDataKematianById(id));
      dispatch(
        returnInfos(
          "Sukses memperbarui data kematian penduduk.",
          200,
          "PUT_DATA_KEMATIAN"
        )
      );
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteDataKematian = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .delete(
      `${process.env.REACT_APP_KEMATIAN_URI}/${id}`,
      tokenConfig(getState)
    )
    .then(() => {
      dispatch({
        type: Types.DELETE_KEMATIAN_SUCCESS,
        payload: id,
      });
    })
    .then(() => dispatch(getDataKematianById(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_KEMATIAN,
  };
};
