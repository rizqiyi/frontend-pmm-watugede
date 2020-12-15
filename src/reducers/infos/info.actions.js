import errorTypes from "./info.types";

export const returnInfos = (message, status, id = null) => {
  return {
    type: errorTypes.GET_INFO,
    payload: {
      message,
      status,
      id,
    },
  };
};

export const clearInfos = () => {
  return {
    type: errorTypes.CLEAR_INFO,
  };
};
