import axios from "axios";
import { initialURL } from "../../utilities/baseURL";
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
