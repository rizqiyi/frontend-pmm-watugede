import errorTypes from "./error.types";

export const returnErrors = (message, status, id = null) => {
  return {
    type: errorTypes.GET_ERRORS,
    payload: {
      message,
      status,
      id,
    },
  };
};

export const clearErrors = () => {
  return {
    type: errorTypes.CLEAR_ERRORS,
  };
};
