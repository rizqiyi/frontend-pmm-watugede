import Types from "./pengikut_keluar.types";

const initialState = {
  isLoading: false,
  pengikut_keluar: [],
  pengusul_keluar: [],
  pengikut_keluar_obj: {},
  keterangan_keluar: [],
  keterangan_keluar_obj: {},
};

export const pengikutKeluarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pengikut_keluar: action.payload,
      };

    case Types.FETCH_PENGUSUL_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pengusul_keluar: action.payload,
      };

    case Types.FETCH_KETERANGAN_KELUAR_MUTASI_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar: action.payload,
      };

    case Types.POST_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar_obj: action.payload.keterangan_keluar_obj,
      };

    case Types.POST_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pengikut_keluar_obj: action.payload.pengikut_keluar_obj,
      };

    default:
      return state;
  }
};
