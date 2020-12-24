import axios from "axios";
import {
  initialURL,
  searchKKByName,
  searchKKByNomorKK,
} from "../../utilities/baseURL";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./kartu_keluarga.types";

export const getAllKartuKeluarga = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(initialURL.kartuKeluargaURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KARTU_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.message, err.response.status));
    });
};

export const searchKKbyName = (params, cond) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(searchKKByName(params), tokenConfig(getState))
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

export const searchKKbyNomorNIK = (params, cond) => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST_KK });

  axios
    .get(searchKKByNomorKK(params), tokenConfig(getState))
    .then((result) => {
      dispatch(returnInfos("", 200, null));
      dispatch({
        type: Types.SEARCH_KK_NO_NIK,
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
