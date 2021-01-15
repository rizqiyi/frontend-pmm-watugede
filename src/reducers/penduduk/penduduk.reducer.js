import Types from "./penduduk.types";

const initialState = {
  isLoading: false,
  penduduk: [],
  penduduk_details: [],
  data_kk: {},
};

export const pendudukReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_PENDUDUK:
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
      return {
        ...state,
        isLoading: false,
        penduduk_details: action.payload.data_penduduk,
        data_kk: action.payload.data_kk,
      };

    default:
      return state;
  }
};
