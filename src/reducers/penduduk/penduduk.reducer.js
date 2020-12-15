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

    case Types.POST_PENDUDUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_obj: action.payload,
      };

    default:
      return state;
  }
};
