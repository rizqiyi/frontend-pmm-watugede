import axios from "axios";
import {
  postPendudukToKKURI,
  getPendudukById,
  updatePendudukURI,
} from "../../utilities/baseURL";
import { returnInfos } from "../infos/info.actions";
import { getKartuKeluargaByID } from "../kartu_keluarga/kartu_keluarga.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./anggota_keluarga.types";

export const postAnggotaKeluarga = ({ ...request }, id) => (
  dispatch,
  getState
) => {
  dispatch({ type: Types.START_REQUEST_ANGGOTA_KELUARGA });

  const body = JSON.stringify({ ...request });

  axios
    .post(postPendudukToKKURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_ANGGOTA_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .catch((err) => {
      dispatch(setLoadingToFalse());
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const fetchAnggotaKeluargaByID = (id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_ANGGOTA_KELUARGA,
  });

  axios
    .get(getPendudukById(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_ANGGOTA_KELUARGA_SUCCESS_BY_ID,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const updateAnggotaKeluarga = ({ ...request }, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_ANGGOTA_KELUARGA,
  });

  const body = JSON.stringify({ ...request });

  axios
    .put(updatePendudukURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.PUT_ANGGOTA_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(fetchAnggotaKeluargaByID(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const deleteAnggotaKeluarga = (idPenduduk, idKK) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_ANGGOTA_KELUARGA,
  });

  axios
    .delete(updatePendudukURI(idPenduduk), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.DELETE_ANGGOTA_KELUARGA_SUCCESS,
        payload: result.data.message,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(getKartuKeluargaByID(idKK)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_INSERT_KELUARGA,
  };
};
