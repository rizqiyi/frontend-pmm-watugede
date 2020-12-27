import Types from "./penduduk_keluar.types";
import axios from "axios";
import { initialURL } from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const getAllDataPendudukKeluar = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_PENDUDUK_KELUAR,
  });

  axios
    .get(initialURL.pendudukKeluarURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_KELUAR_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
