import Types from "./signatures.types";

const initialState = {
  signature: {},
  isFetching: false,
};

export const signaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_SIGNATURES:
      return {
        ...state,
        isFetching: true,
      };

    case Types.POST_SIGNATURES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        signature: action.payload,
      };

    case Types.PUT_SIGNATURES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        signature: action.payload,
      };

    default:
      return state;
  }
};
