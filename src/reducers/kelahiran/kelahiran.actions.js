import axios from "axios";
import { initialURL, fetchKelahiranByIdURI } from "../../utilities/baseURL";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./kelahiran.types";

export const fetchKelahiran = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KELAHIRAN,
  });

  axios
    .get(initialURL.kelahiranURI, tokenConfig(getState))
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
    .get(fetchKelahiranByIdURI(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KELAHIRAN_BY_ID_SUCCESS,
        payload: {
          kelahiran: result.data.data,
          data_ayah: result.data.data ? result.data.data.data_ayah : [],
          data_ibu: result.data.data ? result.data.data.data_ibu : [],
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
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
    .post(initialURL.kelahiranURI, body, tokenConfig(getState))
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

const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_KELAHIRAN,
  };
};
