import axios from "axios";
import { returnInfos } from "../infos/info.actions";
import { tokenConfig } from "../users/users.actions";
import Types from "./dashboard.types";

export const fetchCountedData = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_DASHBOARD_DATA,
  });

  axios
    .get(`${process.env.REACT_APP_DASHBOARD_URI}`, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.FETCH_DASHBOARD_DATA,
        payload: result.data.data ? result.data.data : [],
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
