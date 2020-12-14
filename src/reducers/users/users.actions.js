import userTypes from "./users.types";
import axios from "axios";
import initialURL from "../../utilities/baseURL";
import { returnErrors } from "../errors/error.actions";

export const loadAdmin = () => (dispatch, getState) => {
  dispatch({
    type: userTypes.USER_LOADING,
  });

  axios
    .get(initialURL.adminData, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: userTypes.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: userTypes.AUTH_ERROR,
      });
    });
};

export const loginAdmin = ({ username, password }, onSuccess) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  axios
    .post(initialURL.loginURI, body, config)
    .then((res) => {
      dispatch({
        type: userTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => onSuccess())
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );

      dispatch({
        type: userTypes.LOGIN_FAIL,
      });
    });
};

export const tokenConfig = (getState) => {
  const token = getState().users.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
