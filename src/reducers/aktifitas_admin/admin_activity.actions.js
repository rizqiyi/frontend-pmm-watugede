import axios from "axios";
import { initialURL, postAdminLogoutURI } from "../../utilities/baseURL";
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

export const postDataAdminWhenLogout = (id, onAdminLogout) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.START_REQUEST_ADMIN_ACTIVITY_LOGOUT,
  });

  axios
    .post(postAdminLogoutURI(id), {}, tokenConfig(getState))
    .then((result) => {
      dispatch({
        type: Types.POST_ADMIN_LOGOUT_ACTIVITY,
        payload: result.data.data,
      });
    })
    .then(() => dispatch(onAdminLogout()))
    .catch((err) => {
      dispatch(returnInfos(err.response.data.message, err.response.status));
    });
};
