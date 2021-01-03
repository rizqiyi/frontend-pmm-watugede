import axios from "axios";
import {
  initialURL,
  postKartuKeluargaPendudukMasuk,
  fetchPendudukMasukByID,
  postKeteranganMasukURI,
  updateKeteranganMasukURI,
  deleteKeteranganMasukURI,
  postPendudukToKKURI,
  getPendudukById,
  updatePendudukURI,
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
        payload: {
          data: result.data.data.keluarga_dari.anggota_keluarga
            ? result.data.data.keluarga_dari.anggota_keluarga
            : [],
          keterangan_masuk: result.data.data.keluarga_dari.anggota_keluarga
            ? result.data.data.keluarga_dari.data_penduduk_masuk
            : {},
        },
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const fetchAnggotaKeluargaPendudukMasukByID = (id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .get(getPendudukById(id), tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_ANGGOTA_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: result.data.data,
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

export const postPendudukMasukToKK = ({ ...requests }, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(postPendudukToKKURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_ANGGOTA_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.data,
      });

      dispatch(returnInfos(result.data.message, 201));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postKeteranganMasuk = (requests, idKK, idKepala) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .post(postKeteranganMasukURI(idKK), requests, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_KET_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.message,
      });

      dispatch(
        returnInfos(result.data.message, 201, "POST_KET_PENDUDUK_MASUK_OK")
      );
    })
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKepala)))
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "POST_KET_PENDUDUK_MASUK_FAIL"
        )
      );
    });
};

export const updateAnggotaKeluargaPendudukMasuk = ({ ...requests }, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .put(updatePendudukURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.PUT_ANGGOTA_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(fetchAnggotaKeluargaPendudukMasukByID(id)))
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};

export const updateKeteranganMasuk = (requests, id, idKepala) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .put(updateKeteranganMasukURI(id), requests, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.PUT_KETERANGAN_MASUK_SUCCESS,
        payload: result.data.data,
      });

      dispatch(
        returnInfos(result.data.message, 200, "UPDATE_KETERANGAN_MASUK_OK")
      );
    })
    .then(fetchKartuKeluargaPendudukMasukByID(idKepala))
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          400,
          "UPDATE_KETERANGAN_MASUK_FAIL"
        )
      );
    });
};

export const deleteKeteranganMasuk = (idKK, idKeteranganMasuk, idKepala) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .delete(
      deleteKeteranganMasukURI(idKK, idKeteranganMasuk),
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_KETERANGAN_MASUK_SUCCESS,
      });
      dispatch(
        returnInfos(result.data.message, 200, "DELETE_KETERANGAN_MASUK_OK")
      );
    })
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKepala)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
