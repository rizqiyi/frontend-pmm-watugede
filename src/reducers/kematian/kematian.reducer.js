import Types from "./kematian.types";

const initialState = {
  isLoading: false,
  kematian: [],
  kematian_details: [],
  kematian_obj: {},
  arsip_kematian_obj: {},
};

export const kematianReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KEMATIAN:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kematian: action.payload,
      };

    case Types.FETCH_KEMATIAN_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kematian_details: action.payload.kematian,
        kematian_obj: action.payload.child,
      };

    case Types.POST_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kematian_obj: action.payload,
      };

    case Types.POST_ARSIP_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        arsip_kematian_obj: action.payload,
      };

    case Types.PUT_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kematian_details: action.payload,
      };

    case Types.PUT_ARSIP_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        arsip_kematian_obj: action.payload,
      };

    case Types.DELETE_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kematian: state.kematian.filter((data) => data._id !== action.payload),
      };

    case Types.DELETE_ARSIP_KEMATIAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
