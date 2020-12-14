import Types from "./error.types";

const initialState = {
  message: {},
  status: null,
  id: null,
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };

    case Types.CLEAR_ERRORS:
      return {
        message: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
};

export default errorsReducer;
