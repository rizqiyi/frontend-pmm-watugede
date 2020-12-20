import Types from "./penduduk_keluar.types";

const initialState = {
  isLoading: false,
  penduduk_keluar: [],
  penduduk_keluar_obj: {},
  keterangan_keluar: [],
  keterangan_keluar_obj: {},
};

export const pendudukKeluarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KELUAR:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        penduduk_keluar: action.payload,
      };

    case Types.FETCH_PENDUDUK_KELUAR_SUCCESS_BY_ID:
      return {
        ...state,
        isLoading: false,
        penduduk_keluar_obj: action.payload.penduduk_keluar_obj,
      };

    case Types.FETCH_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar: action.payload.keterangan_keluar,
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

    case Types.PUT_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_keluar_obj: action.payload.penduduk_keluar_obj,
      };

    case Types.DELETE_PENDUDUK_KELUAR_SUCCESS:
      return {
        ...state,
        penduduk_keluar: state.penduduk_keluar.filter(
          (d) => d._id !== action.payload.penduduk_keluar_id
        ),
        isLoading: false,
      };

    default:
      return state;
  }
};
