import axios from "axios";
import { initialURL } from "../../utilities/baseURL";
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
