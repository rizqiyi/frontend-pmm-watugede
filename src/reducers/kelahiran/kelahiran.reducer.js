import Types from "./kelahiran.types";

const initialState = {
  kelahiran: [],
  kelahiran_obj: [],
  data_ayah: {},
  data_ibu: {},
  signature: {},
  isLoading: false,
};

export const kelahiranReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KELAHIRAN:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_KELAHIRAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kelahiran: action.payload,
      };

    case Types.POST_KELAHIRAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kelahiran_obj: action.payload,
      };

    case Types.FETCH_KELAHIRAN_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kelahiran_obj: action.payload.kelahiran,
        data_ayah: action.payload.data_ayah,
        data_ibu: action.payload.data_ibu,
        signature: action.payload.signature,
      };

    case Types.PUT_KELAHIRAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kelahiran_obj: action.payload,
      };

    case Types.DELETE_KELAHIRAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kelahiran_obj: [],
      };

    case Types.SET_LOADING_TO_FALSE_KELAHIRAN:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
