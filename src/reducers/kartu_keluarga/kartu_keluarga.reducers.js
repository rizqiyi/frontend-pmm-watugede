import Types from "./kartu_keluarga.types";

const initialState = {
  isLoading: false,
  kartu_keluarga: [],
  kartu_keluarga_obj: {},
};

export const kartuKeluargaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_KK:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga: action.payload,
        isLoading: false,
      };

    case Types.FETCH_KARTU_KELUARGA_SUCCESS_BY_ID:
    case Types.PUT_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.POST_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.DELETE_KARTU_KELUARGA_SUCCESS:
      return {
        ...state,
        kartu_keluarga: state.kartu_keluarga.filter(
          (data) => data._id !== action.payload
        ),
        isLoading: false,
      };

    default:
      return state;
  }
};
