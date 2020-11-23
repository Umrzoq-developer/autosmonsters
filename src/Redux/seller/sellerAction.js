import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADMIN_SELLER_BEGIN = "ADMIN_SELLER_BEGIN";
export const ADMIN_SELLER_SUCCESS = "ADMIN_SELLER_SUCCESS";
export const ADMIN_SELLER_FAIL = "ADMIN_SELLER_FAIL";

// /admin/seller/details/
export const ADMIN_SELLER_BY_ID_BEGIN = "ADMIN_SELLER_BY_ID_BEGIN";
export const ADMIN_SELLER_BY_ID_SUCCESS = "ADMIN_SELLER_BY_ID_SUCCESS";
export const ADMIN_SELLER_BY_ID_FAIL = "ADMIN_SELLER_BY_ID_FAIL";

export const DELETE_SELLER_BY_ID_BEGIN = "DELETE_SELLER_BY_ID_BEGIN";
export const DELETE_SELLER_BY_ID_SUCCESS = "DELETE_SELLER_BY_ID_SUCCESS";
export const DELETE_SELLER_BY_ID_FAIL = "DELETE_SELLER_BY_ID_FAIL";

export const HANDLE_SELLER_DATA = "HANDLE_SELLER_DATA";

export const HANDLE_CLOSE_DELETE_SUCCESS = "HANDLE_CLOSE_DELETE_SUCCESS";
export const HANDLE_CLOSE_DELETE_FAIL = "HANDLE_CLOSE_DELETE_FAIL";


export const adminSeller = () => async (dispatch) => {
  dispatch({ type: ADMIN_SELLER_BEGIN });
  dispatch(showLoading());

  try {
    const response = await axiosInstance().get("/admin/seller");

    dispatch({
      type: ADMIN_SELLER_SUCCESS,
      payload: response.data.seller,
      count: response.data.count,
    });

    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: ADMIN_SELLER_FAIL });
    dispatch(hideLoading());
  }
};

export const getSellerById = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_SELLER_BY_ID_BEGIN });
  dispatch(showLoading());

  try {
    const response = await axiosInstance().get(`/admin/seller/details/${id}`);

    dispatch({ type: ADMIN_SELLER_BY_ID_SUCCESS, payload: response });
    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: ADMIN_SELLER_BY_ID_FAIL });
    dispatch(hideLoading());
  }
};

export const handleSellerData = (data) => {
  return {
    type: HANDLE_SELLER_DATA,
    payload: data,
  };
};

export const deleteSellerById = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SELLER_BY_ID_BEGIN });

  try {
    await axiosInstance().delete(`/admin/seller/delete/${id}`);

    dispatch({ type: DELETE_SELLER_BY_ID_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_SELLER_BY_ID_FAIL });
  }
};

export const handleDeleteCloseSuccess = () => {
  return {
    type: HANDLE_CLOSE_DELETE_SUCCESS
  }
};

export const handleDeleteCloseFail = () => {
  return {
    type: HANDLE_CLOSE_DELETE_FAIL
  }
};

