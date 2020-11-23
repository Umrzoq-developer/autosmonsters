import {
  GET_VIN_NUMBER_BEGIN,
  GET_VIN_NUMBER_SUCCESS,
  GET_VIN_NUMBER_FAIL,
} from "./VinNumberAction";

const initialState = {
  getVinDataBegin: false,
  getVinDataSuccess: false,
  getVinDataFail: false,
  getVinData: [],
  myOwnVin: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VIN_NUMBER_BEGIN:
      return {
        ...state,
        getVinDataBegin: true,
      };
    case GET_VIN_NUMBER_SUCCESS:
      return {
        ...state,
        getVinDataBegin: false,
        getVinDataSuccess: true,
        getVinDataFail: false,
        getVinData: action.payload,
        myOwnVin: action.myVin
      };
    case GET_VIN_NUMBER_FAIL:
      return {
        ...state,
        getVinDataBegin: false,
        getVinDataSuccess: false,
        getVinDataFail: true,
      };
    default:
      return state;
  }
};
