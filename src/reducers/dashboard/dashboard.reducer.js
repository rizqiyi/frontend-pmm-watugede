import Types from "./dashboard.types";

const initialState = {
  isLoading: false,
  dashboard_obj: [],
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_DASHBOARD_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case Types.FETCH_DASHBOARD_DATA:
      return {
        ...state,
        isLoading: false,
        dashboard_obj: action.payload,
      };

    default:
      return state;
  }
};
