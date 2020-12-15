import Types from "./penduduk.types";
import axios from "axios";
import initialURL from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnErrors } from "../errors/error.actions";

export const fetchPenduduk = () => (dispatch, getState) => {
  dispatch({ type: Types.START_REQUEST });

  axios
    .get(initialURL.pendudukURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_PENDUDUK_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.message, err.response.status));
    });
};
