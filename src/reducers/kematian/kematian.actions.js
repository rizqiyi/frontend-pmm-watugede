import Types from "./kematian.types";
import axios from "axios";
import { postKematianURI, initialURL } from "../../utilities/baseURL";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const fetchDataKematian = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  axios
    .get(initialURL.kematianURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};

export const postKematian = ({ ...requests }, id) => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_KEMATIAN,
  });

  const body = JSON.stringify({ ...requests });

  axios
    .post(postKematianURI(id), body, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_KEMATIAN_SUCCESS,
        payload: result.data.data,
      });
      dispatch(returnInfos(result.data.message, 201));
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
