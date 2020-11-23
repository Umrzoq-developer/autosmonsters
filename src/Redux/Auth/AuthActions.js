import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const MAKE_LOGOUT = "MAKE_LOGOUT";

export const HANDLE_CLOSE_PROMPT = "HANDLE_CLOSE_PROMPT"

export const makeLogin = (emailAddress, location, history) => async (
  dispatch
) => {
  dispatch({ type: BEGIN_LOGIN });
  dispatch(showLoading());

  try {
    const response = await axiosInstance().post("/login", {
      emailAddress: emailAddress,
    });

    dispatch({ type: SUCCESS_LOGIN, payload: response });
    localStorage.setItem("token", response.data);
    localStorage.setItem("email", emailAddress);

    if (location.state) {
      history.replace(location.state?.from?.pathname);
    } else {
      history.replace("/");
    }

    dispatch(hideLoading());
  } catch (err) {
    dispatch({ type: FAILURE_LOGIN });
    dispatch(hideLoading());
  }
};

export const handleCloseLoginPrompt = () => {
  return{
    type: HANDLE_CLOSE_PROMPT
  }
}


export const makeLogout = () => {
  return {
    type: MAKE_LOGOUT,
  };
};
