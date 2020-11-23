import {
  ADMIN_SELLER_BEGIN,
  ADMIN_SELLER_SUCCESS,
  ADMIN_SELLER_FAIL,
  ADMIN_SELLER_BY_ID_BEGIN,
  ADMIN_SELLER_BY_ID_SUCCESS,
  ADMIN_SELLER_BY_ID_FAIL,
  HANDLE_SELLER_DATA,
  DELETE_SELLER_BY_ID_BEGIN,
  DELETE_SELLER_BY_ID_SUCCESS,
  DELETE_SELLER_BY_ID_FAIL,
  HANDLE_CLOSE_DELETE_SUCCESS,
  HANDLE_CLOSE_DELETE_FAIL
} from "./sellerAction";

const initialState = {
  sellerBegin: false,
  sellerSuccess: false,
  sellerFail: false,
  sellerData: [],
  count: 0,
  sellerByIdBegin: false,
  sellerByIdSuccess: false,
  sellerByIdFail: false,
  sellerByIdData: [],
  handlingData: {},
  deleteUserByIdBegin: false,
  deleteUserByIdSuccess: false,
  deleteUserByIdFail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_SELLER_BEGIN:
      return {
        ...state,
        sellerBegin: true,
      };
    case ADMIN_SELLER_SUCCESS:
      return {
        ...state,
        sellerBegin: false,
        sellerSuccess: true,
        sellerFail: false,
        sellerData: action.payload,
        count: action.count,
      };
    case ADMIN_SELLER_FAIL:
      return {
        ...state,
        sellerBegin: false,
        sellerSuccess: false,
        sellerFail: true,
      };
    case ADMIN_SELLER_BY_ID_BEGIN:
      return {
        ...state,
        sellerByIdBegin: false,
      };
    case ADMIN_SELLER_BY_ID_SUCCESS:
      return {
        ...state,
        sellerByIdBegin: false,
        sellerByIdSuccess: true,
        sellerByIdFail: false,
        sellerByIdData: action.payload,
      };
    case ADMIN_SELLER_BY_ID_FAIL:
      return {
        ...state,
        sellerByIdBegin: false,
        sellerByIdSuccess: false,
        sellerByIdFail: true,
      };
    case HANDLE_SELLER_DATA:
      return {
        ...state,
        handlingData: action.payload,
      };
    case DELETE_SELLER_BY_ID_BEGIN:
      return {
        ...state,
        deleteUserByIdBegin: true,
      };
    case DELETE_SELLER_BY_ID_SUCCESS:
      return {
        ...state,
        deleteUserByIdBegin: false,
        deleteUserByIdSuccess: true,
        deleteUserByIdFail: false,
        sellerData: state.sellerData.filter(data => data._id !== action.payload)
      };
    case DELETE_SELLER_BY_ID_FAIL:
      return {
        ...state,
        deleteUserByIdBegin: false,
        deleteUserByIdSuccess: false,
        deleteUserByIdFail: true,
      };
    case HANDLE_CLOSE_DELETE_SUCCESS:
      return {
        ...state,
        deleteUserByIdSuccess: false
      };
    case HANDLE_CLOSE_DELETE_FAIL:
      return {
        ...state,
        deleteUserByIdFail: false
      };
    default:
      return state;
  }
};
