import Types from "./penduduk.types";

const initialState = {
  isLoading: false,
  penduduk: [],
  penduduk_details: [],
  data_kk: {},
  search_result_nik: [],
  search_result_no_kk: [],
  search_result_name: [],
  search_condition: "",
  nomor_kk: "",
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

    case Types.SEARCH_PENDUDUK_BY_NAME:
      return {
        ...state,
        isLoading: false,
        search_result_name: action.payload.res,
        search_condition: action.payload.cond,
        search_result_nik: [],
        search_result_no_kk: [],
      };

    case Types.SEARCH_PENDUDUK_BY_NO_NIK:
      return {
        ...state,
        isLoading: false,
        search_result_name: [],
        search_condition: action.payload.cond,
        search_result_nik: action.payload.res,
        search_result_no_kk: [],
      };

    case Types.SEARCH_PENDUDUK_BY_NO_KK:
      return {
        ...state,
        isLoading: false,
        search_result_name: [],
        search_condition: action.payload.cond,
        search_result_nik: [],
        nomor_kk: action.payload.no_kk,
        search_result_no_kk: action.payload.res,
      };

    case Types.CLEAR_SEARCH_PENDUDUK_RESULT:
      return {
        ...state,
        isLoading: false,
        search_result_nik: [],
        search_result_no_kk: [],
        nomor_kk: "",
        search_result_name: [],
        search_condition: "",
      };

    case Types.SET_LOADING_PENDUDUK_TO_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
