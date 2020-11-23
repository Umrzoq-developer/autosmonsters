import {
  USER_PROFILE_BEGIN,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  HANDLE_DATA
} from "./userProfileAction";

const initialState = {
  userProfileBegin: false,
  userProfileSuccess: false,
  userProfileFail: false,
  userProfileData: [],
  detailData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_BEGIN:
      return {
        ...state,
        userProfileBegin: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfileBegin: false,
        userProfileSuccess: true,
        userProfileFail: false,
        userProfileData: action.payload,
      };
    case USER_PROFILE_FAIL:
      return {
        ...state,
        userProfileBegin: false,
        userProfileSuccess: false,
        userProfileFail: true,
      };
    case HANDLE_DATA:
      return {
        ...state,
        detailData: action.payload
      }
    default:
      return state;
  }
};
