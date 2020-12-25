import Types from "./kartu_keluarga.types";

const initialState = {
  isLoading: false,
  kartu_keluarga: [],
  kartu_keluarga_obj: [],
  post_kartu_keluaga: {},
  search_result_by_name: [],
  search_result_by_nik: [],
  search_condition: "",
};

export const kartuKeluargaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KK:
      return {
        ...state,
        isLoading: true,
      };

    case Types.SEARCH_KK_BY_NAME:
      return {
        ...state,
        search_result_by_name: action.payload.res,
        search_condition: action.payload.cond,
        search_result_by_nik: [],
        isLoading: false,
      };

    case Types.SEARCH_KK_NO_NIK:
      return {
        ...state,
        search_result_by_nik: action.payload.res,
        search_condition: action.payload.cond,
        search_result_by_name: [],
        isLoading: false,
      };

    case Types.FETCH_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga: action.payload,
        isLoading: false,
      };

    case Types.FETCH_KARTU_KELUARGA_SUCCESS_BY_ID:
      console.log(action.payload);
      return {
        ...state,
        kartu_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.PUT_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.POST_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post_kartu_keluaga: action.payload,
      };

    case Types.DELETE_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga: state.kartu_keluarga.filter(
          (data) => data._id !== action.payload
        ),
        isLoading: false,
      };

    case Types.CLEAR_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        search_result_by_name: [],
        search_result_by_nik: [],
        search_condition: "",
      };

    case Types.SET_LOADING_TO_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
