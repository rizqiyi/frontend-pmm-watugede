import Types from "./penduduk.types";

const initialState = {
  isLoading: false,
  penduduk: [],
  penduduk_obj: {},
};

export const pendudukReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_PENDUDUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk: action.payload,
      };

    case Types.FETCH_PENDUDUK_SUCCESS_BY_ID:
    case Types.PUT_PENDUDUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_obj: action.payload,
      };

    case Types.POST_PENDUDUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_obj: action.payload,
      };

    case Types.DELETE_PENDUDUK_SUCCESS:
      return {
        ...state,
        penduduk: state.penduduk.filter((d) => d._id !== action.payload.id),
        isLoading: false,
      };

    default:
      return state;
  }
};
