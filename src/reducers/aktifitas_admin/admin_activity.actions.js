import axios from "axios";
import { initialURL } from "../../utilities/baseURL";
import Types from "./admin_activity.types";
import { tokenConfig } from "../users/users.actions";
import { returnInfos } from "../infos/info.actions";

export const getDataAdminActivity = () => (dispatch, getState) => {
  dispatch({
    type: Types.START_REQUEST_ADMIN_ACTIVITY,
  });

  axios
    .get(initialURL.activityURI, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.GET_ADMIN_ACTIVITY,
        payload: result.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
