import Types from "./penduduk_keluar.types";

const initialState = {
  penduduk_keluar: [],
  penduduk_keluar_obj: {},
  penduduk_keluar_by_id: [],
  signature: {},
  keterangan_keluar_by_id: [],
  isLoading: false,
  isLoadingKeterangan: false,
};

export const pendudukKeluarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_PENDUDUK_KELUAR:
      return {
        ...state,
        isLoading: true,
      };

    case Types.START_REQUEST_KETERANGAN_KELUAR:
      return {
        ...state,
        isLoadingKeterangan: true,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID:
      return {
        ...state,
        penduduk_keluar_by_id: action.payload.someData,
        keterangan_keluar_by_id: action.payload.keterangan,
        signature: action.payload.signature,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.POST_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        keterangan_keluar_by_id: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.POST_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar_obj: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.POST_MANY_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar_obj: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.DELETE_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar: state.penduduk_keluar.filter(
          (data) => data._id !== action.payload
        ),
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.DELETE_ALL_DATA_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar_by_id: state.penduduk_keluar_by_id.filter(
          (data) => data._id !== action.payload
        ),
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.DELETE_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        keterangan_keluar_by_id: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.UPDATE_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        keterangan_keluar_by_id: action.payload,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    case Types.SET_LOADING_TO_FALSE_PENDUDUK_KELUAR:
      return {
        ...state,
        isLoading: false,
        isLoadingKeterangan: false,
      };

    default:
      return state;
  }
};
