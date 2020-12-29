import Types from "./penduduk_keluar.types";

const initialState = {
  penduduk_keluar: [],
  penduduk_keluar_obj: {},
  penduduk_keluar_by_id: [],
  keterangan_keluar_by_id: {},
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

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID:
      return {
        ...state,
        penduduk_keluar_by_id: action.payload.someData,
        keterangan_keluar_by_id: action.payload.keterangan,
        isLoading: false,
      };

    case Types.POST_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        keterangan_keluar_by_id: action.payload,
        isLoading: false,
      };

    case Types.POST_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar_obj: action.payload,
        isLoading: false,
      };

    case Types.SET_LOADING_TO_FALSE_PENDUDUK_KELUAR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
