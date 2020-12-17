import Types from "./pengikut_keluar.types";

const initialState = {
  isLoading: false,
  pengikut_keluar: [],
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

    case Types.FETCH_KETERANGAN_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar: action.payload.keterangan_keluar,
        pengikut_keluar_obj: action.payload.pengikut_keluar_obj,
      };

    case Types.POST_KETERANGAN_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_keluar_obj: action.payload.keterangan_keluar_obj,
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

    case Types.POST_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pengikut_keluar_obj: action.payload.pengikut_keluar_obj,
      };

    case Types.PUT_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pengikut_keluar_obj: action.payload.pengikut_keluar_obj,
      };

    case Types.DELETE_PENGIKUT_KELUAR_SUCCESS:
      return {
        ...state,
        pengikut_keluar: state.pengikut_keluar.filter(
          (d) => d._id !== action.payload.ket_keluar_id
        ),
        isLoading: false,
      };

    default:
      return state;
  }
};
