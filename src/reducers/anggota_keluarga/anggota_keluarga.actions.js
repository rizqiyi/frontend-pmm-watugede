import axios from "axios";
import { postPendudukToKKURI } from "../../utilities/baseURL";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./anggota_keluarga.types";

export const postAnggotaKeluarga = ({ ...request }, id) => (
  dispatch,
  getState
) => {
  dispatch({ type: Types.START_REQUEST_ANGGOTA_KELUARGA });

  const body = JSON.stringify({ ...request });

  axios
    .post(postPendudukToKKURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_ANGGOTA_KELUARGA_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 200));
    })
    .catch((err) => {
      dispatch(setLoadingToFalse());
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

const setLoadingToFalse = () => {
  return {
    type: Types.SET_LOADING_TO_FALSE_INSERT_KELUARGA,
  };
};
