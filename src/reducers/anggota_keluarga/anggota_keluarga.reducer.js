import Types from "./anggota_keluarga.types";

const initialState = {
  isLoading: false,
  anggota_keluarga: [],
  anggota_keluarga_obj: [],
};

export const anggotaKeluargaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_ANGGOTA_KELUARGA:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_ANGGOTA_KELUARGA_SUCCESS_BY_ID:
    case Types.PUT_ANGGOTA_KELUARGA_SUCCESS:
      return {
        ...state,
        anggota_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.POST_ANGGOTA_KELUARGA_SUCCESS:
      return {
        ...state,
        anggota_keluarga_obj: action.payload,
        isLoading: false,
      };

    case Types.SET_LOADING_TO_FALSE_INSERT_KELUARGA:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
