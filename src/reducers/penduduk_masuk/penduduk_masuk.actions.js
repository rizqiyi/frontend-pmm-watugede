import axios from "axios";
import {
  initialURL,
  postKartuKeluargaPendudukMasuk,
  fetchPendudukMasukByID,
} from "../../utilities/baseURL";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./penduduk_masuk.types";

export const fetchKartuKeluargaPendudukMasuk = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .get(initialURL.pendudukMasukURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KK_PENDUDUK_MASUK,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const fetchKartuKeluargaPendudukMasukByID = (id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .get(fetchPendudukMasukByID(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: result.data.data
          ? result.data.data.keluarga_dari.anggota_keluarga
          : [],
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postKKPendudukMasuk = ({ ...request }) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  const body = JSON.stringify({ ...request });

  axios
    .post(postKartuKeluargaPendudukMasuk(), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.data,
      });
      dispatch(
        returnInfos(result.data.message, 201, "POST_KK_PENDUDUK_MASUK_SUCCESS")
      );
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "POST_KK_PENDUDUK_MASUK_FAILED"
        )
      );
    });
};
