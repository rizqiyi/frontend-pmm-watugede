import Types from "./users.types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  isComplete: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case Types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case Types.LOGIN_SUCCESS:
    case Types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isComplete: true,
      };

    case Types.AUTH_ERROR:
    case Types.LOGIN_FAIL:
    case Types.LOGOUT_SUCCESS:
    case Types.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isComplete: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
