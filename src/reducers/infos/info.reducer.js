import Types from "./info.types";

const initialState = {
  message: {},
  status: null,
  id: null,
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_INFO:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };

    case Types.CLEAR_INFO:
      return {
        message: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
};

export default infoReducer;
