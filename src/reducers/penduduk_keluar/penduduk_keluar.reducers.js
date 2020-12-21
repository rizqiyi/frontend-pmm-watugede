import Types from "./penduduk_keluar.types";

const initialState = {
  isLoading: false,
  penduduk_keluar: [],
  pengikut_keluar: [],
  penduduk_keluar_detail: [],
  penduduk_keluar_obj: {},
  keterangan_keluar: [],
  keterangan_keluar_obj: [],
};

export const pendudukKeluarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KELUAR:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_keluar: action.payload,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID:
      return {
        ...state,
        isLoading: false,
        penduduk_keluar_detail: action.payload,
      };

    case Types.FETCH_PENGIKUT_KELUAR_DETAILS:
      return {
        ...state,
        isLoading: false,
        pengikut_keluar: action.payload,
      };

    case Types.FETCH_KETERANGAN_KELUAR_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar_obj: action.payload,
      };

    case Types.PUT_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar_obj: action.payload.keterangan_keluar_obj,
      };

    case Types.DELETE_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        keterangan_keluar: state.keterangan_keluar.filter(
          (d) => d._id !== action.payload.ket_keluar_id
        ),
        isLoading: false,
      };

    case Types.PUT_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_keluar_obj: action.payload,
      };

    case Types.DELETE_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar: state.penduduk_keluar.filter(
          (d) => d._id !== action.payload
        ),
        isLoading: false,
      };

    default:
      return state;
  }
};
