import Types from "./signatures.types";
import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { fetchKelahiranId } from "../kelahiran/kelahiran.actions";
import { tokenConfig } from "../users/users.actions";
import { getDataKematianById } from "../kematian/kematian.actions";
import { getPendudukKeluarById } from "../penduduk_keluar/penduduk_keluar.actions";

export const updateSignature = ({ ...requests }, idData, idSignature, flag) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_SIGNATURES,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .put(
      `${process.env.REACT_APP_SIGNATURES_URI}/${idSignature}/u`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.PUT_SIGNATURES_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .then(() => {
      switch (flag) {
        case "kelahiran":
          return dispatch(fetchKelahiranId(idData));

        case "kematian":
          return dispatch(getDataKematianById(idData));

        case "penduduk_keluar":
          return dispatch(getPendudukKeluarById(idData));

        default:
          return flag;
      }
    })
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};

export const postSignatureKelahiran = ({ ...requests }, idKelahiran) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_SIGNATURES,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(
      `${process.env.REACT_APP_SIGNATURES_URI}/${idKelahiran}/p/kelahiran`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_SIGNATURES_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(fetchKelahiranId(idKelahiran)))
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};

export const postSignatureKematian = ({ ...requests }, idKematian) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_SIGNATURES,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(
      `${process.env.REACT_APP_SIGNATURES_URI}/${idKematian}/p/kematian`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_SIGNATURES_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(getDataKematianById(idKematian)))
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};

export const postSignaturePendudukKeluar = (
  { ...requests },
  idPendudukKeluar
) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_SIGNATURES,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(
      `${process.env.REACT_APP_SIGNATURES_URI}/${idPendudukKeluar}/p/keluar`,
      body,
      tokenConfig(getState)
    )
    .then((result) => {
      dispatch({
        type: Types.POST_SIGNATURES_SUCCESS,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(getPendudukKeluarById(idPendudukKeluar)))
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};
