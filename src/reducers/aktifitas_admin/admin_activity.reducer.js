import Types from "./admin_activity.types";

const initialState = {
  activity: [],
  activity_obj: {},
  isLoading: false,
  isLogout: false,
};

export const adminActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_ADMIN_ACTIVITY:
      return {
        ...state,
        isLoading: true,
      };

    case Types.START_REQUEST_ADMIN_ACTIVITY_LOGOUT:
      return {
        ...state,
        isLogout: true,
      };

    case Types.GET_ADMIN_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        activity: action.payload,
      };

    case Types.POST_ADMIN_LOGOUT_ACTIVITY:
      return {
        ...state,
        isLogout: false,
        activity_obj: action.payload,
      };

    default:
      return state;
  }
};
