import { combineReducers } from "redux";

//reducers
import AuthReducer from "./Auth/AuthReducer";
import addCarReducer from "./addCar/addCarReducer";
import adminLoginReducer from "./adminLogin/adminLoginReducer";
import sellerReducer from "./seller/sellerReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import VinNumberReducer from "./VinNumber/VinNumberReducer";
import { loadingBarReducer } from 'react-redux-loading-bar'

export const rootReducer = combineReducers({
  auth: AuthReducer,
  addCar: addCarReducer,
  admin: adminLoginReducer,
  seller: sellerReducer,
  userProfile: userProfileReducer,
  vinNumber: VinNumberReducer,
  loadingBar: loadingBarReducer,
});
