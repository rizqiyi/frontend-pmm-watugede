import Types from "./penduduk_masuk.types";

const initialState = {
  penduduk_masuk: [],
  penduduk_masuk_details: [],
  penduduk_masuk_obj: {},
  keterangan_masuk_obj: {},
  isLoading: false,
};

export const pendudukMasukReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_PENDUDUK_MASUK:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_KK_PENDUDUK_MASUK:
      return {
        ...state,
        penduduk_masuk: action.payload,
        isLoading: false,
      };

    case Types.FETCH_PENDUDUK_MASUK_SUCCESS_BY_ID:
      return {
        ...state,
        penduduk_masuk_details: action.payload.data,
        keterangan_masuk_obj: action.payload.keterangan_masuk,
        isLoading: false,
      };

    case Types.POST_PENDUDUK_MASUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_masuk_obj: action.payload,
      };

    case Types.POST_KET_PENDUDUK_MASUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_masuk_obj: action.payload,
      };

    case Types.PUT_PENDUDUK_MASUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        penduduk_masuk_obj: action.payload,
      };

    case Types.PUT_KETERANGAN_MASUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        keterangan_masuk_obj: action.payload,
      };

    case Types.DELETE_PENDUDUK_MASUK_SUCCESS:
      return {
        ...state,
        penduduk_masuk_details: state.penduduk_masuk_details.filter(
          (data) => data._id !== action.payload
        ),
        isLoading: false,
      };

    case Types.DELETE_KETERANGAN_MASUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
