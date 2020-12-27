import Types from "./penduduk_keluar.types";

const initialState = {
  penduduk_keluar: [],
  penduduk_keluar_obj: {},
  isLoading: false,
};

export const pendudukKeluarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_PENDUDUK_KELUAR:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar: action.payload,
        isLoading: false,
      };

    case Types.POST_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar_obj: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
