import {
  ADMIN_LOGIN_BEGIN,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADD_ADMIN_BEGIN,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAIL,
  HANDLE_CLOSE,
  HANDLE_CLOSE_SECOND,
  HANDLE_ADMIN_LOGIN
} from "./adminLoginAction";

const initialState = {
  adminLoginBegin: false,
  adminLoginSuccess: false,
  adminLoginFail: false,
  addAdminLoginBegin: false,
  addAdminLoginSuccess: false,
  addAdminLoginFail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_BEGIN:
      return {
        ...state,
        adminLoginBegin: true,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminLoginBegin: false,
        adminLoginSuccess: true,
        adminLoginFail: false,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        adminLoginBegin: false,
        adminLoginSuccess: false,
        adminLoginFail: true,
      };
    case ADD_ADMIN_BEGIN:
      return {
        ...state,
        addAdminLoginBegin: true,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminLoginBegin: false,
        addAdminLoginSuccess: true,
        addAdminLoginFail: false,
      };
    case ADD_ADMIN_FAIL:
      return {
        ...state,
        addAdminLoginBegin: false,
        addAdminLoginSuccess: false,
        addAdminLoginFail: true,
      };
    case HANDLE_CLOSE:
      return {
        ...state,
        addAdminLoginFail: false
      };
    case HANDLE_CLOSE_SECOND:
      return {
        addAdminLoginSuccess: false,
      };
    case HANDLE_ADMIN_LOGIN:
      return {
        ...state,
        adminLoginFail: false
      };
    default:
      return state;
  }
};
