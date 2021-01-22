import Types from "./signatures.types";
import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { fetchKelahiranId } from "../kelahiran/kelahiran.actions";
import { tokenConfig } from "../users/users.actions";

export const updateSignature = ({ ...requests }, idData, idSignature) => (
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
    .then(() => dispatch(fetchKelahiranId(idData)))
    .catch((err) =>
      dispatch(returnInfos(err.response.data.message, err.response.status))
    );
};
