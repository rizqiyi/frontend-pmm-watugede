import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./penduduk_masuk.types";

export const fetchKartuKeluargaPendudukMasuk = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .get(`${process.env.REACT_APP_PENDUDUK_MASUK_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KK_PENDUDUK_MASUK,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
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
    .get(
      `${process.env.REACT_APP_PENDUDUK__MASUK_URI}/${id}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: {
          data: result.data.data ? result.data.data.anggota_keluarga : [],
          keterangan_masuk: result.data.data
            ? result.data.data.data_penduduk_masuk
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
    .get(`${process.env.REACT_APP_PENDUDUK_URI}/${id}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_ANGGOTA_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const postKKPendudukMasuk = ({ ...request }) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  const body = JSON.stringify({ ...request });

  axios
    .post(
      `${process.env.REACT_APP_KARTU_KELUARGA_URI}/in`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.data,
      });
      dispatch(
        returnInfos(result.data.message, 201, "POST_KK_PENDUDUK_MASUK_SUCCESS")
      );
      dispatch({
        type: Types.GET_ID_PENDUDUK_MASUK,
        payload: result.data.data ? result.data.data.keluarga_dari : "",
      });
    })
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "POST_KK_PENDUDUK_MASUK_FAILED"
        )
      );
      dispatch(setLoadingPendudukMasukToFalse());
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
    .post(
      `${process.env.REACT_APP_PENDUDUK_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_ANGGOTA_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.data,
      });

      dispatch(returnInfos(result.data.message, 201));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const postKeteranganMasuk = (requests, idKK) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .post(
      `${process.env.REACT_APP_PENDUDUK__MASUK_URI}/${idKK}/p`,
      requests,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_KET_PENDUDUK_MASUK_SUCCESS,
        payload: result.data.message,
      });

      dispatch(
        returnInfos(result.data.message, 201, "POST_KET_PENDUDUK_MASUK_OK")
      );
    })
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKK)))
    .catch((err) => {
      dispatch(
        returnInfos(
          err.response.data.message,
          err.response.status,
          "POST_KET_PENDUDUK_MASUK_FAIL"
        )
      );
      dispatch(setLoadingPendudukMasukToFalse());
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
    .put(
      `${process.env.REACT_APP_PENDUDUK_URI}/${id}`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_ANGGOTA_PENDUDUK_MASUK_SUCCESS_BY_ID,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => dispatch(fetchAnggotaKeluargaPendudukMasukByID(id)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const updateKeteranganMasuk = (requests, id, idKK) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .put(
      `${process.env.REACT_APP_PENDUDUK__MASUK_URI}/${id}`,
      requests,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_KETERANGAN_MASUK_SUCCESS,
        payload: result.data.data,
      });

      dispatch(
        returnInfos(result.data.message, 200, "UPDATE_KETERANGAN_MASUK_OK")
      );
    })
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKK)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const deleteKeteranganMasuk = (idKK, idKeteranganMasuk) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .delete(
      `${process.env.REACT_APP_PENDUDUK__MASUK_URI}/${idKK}/d/${idKeteranganMasuk}`,
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
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKK)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const deletePendudukMasukPadaKK = (idKK, idPendudukMasuk) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_MASUK,
  });

  axios
    .delete(
      `${process.env.REACT_APP_PENDUDUK_URI}/${idPendudukMasuk}/d/${idKK}`,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.DELETE_PENDUDUK_MASUK_SUCCESS,
        payload: idPendudukMasuk,
      });
    })
    .then(() => dispatch(fetchKartuKeluargaPendudukMasukByID(idKK)))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
      dispatch(setLoadingPendudukMasukToFalse());
    });
};

export const setLoadingPendudukMasukToFalse = () => {
  return {
    type: Types.SET_LOADING_PENDUDUK_MASUK_TO_FALSE,
  };
};
