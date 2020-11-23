import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// /profile?email=javoh@gmail.com
export const USER_PROFILE_BEGIN = "USER_PROFILE_BEGIN";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

export const HANDLE_DATA = "HANDLE_DATA";

export const userProfileLogin = () => async (dispatch) => {
  dispatch({ type: USER_PROFILE_BEGIN });
  dispatch(showLoading());

  try {
    const email = localStorage.getItem("email");
    const response = await axiosInstance().get(`/profile?email=${email}`);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data.seller });

    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: USER_PROFILE_FAIL });
    dispatch(hideLoading());
  }
};

export const handleObjectData = (data) => {
  return {
    type: HANDLE_DATA,
    payload: data,
  };
};
