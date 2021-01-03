import Types from "./admin_activity.types";

const initialState = {
  activity: [],
  activity_obj: {},
  isLoading: false,
};

export const adminActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_REQUEST_ADMIN_ACTIVITY:
      return {
        ...state,
        isLoading: false,
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
        isLoading: false,
        activity_obj: action.payload,
      };

    default:
      return state;
  }
};
