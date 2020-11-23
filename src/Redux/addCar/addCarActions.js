import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const BEGIN_ADD_CAR = "BEGIN_ADD_CAR";
export const SUCCESS_ADD_CAR = "SUCCESS_ADD_CAR";
export const FAIL_ADD_CAR = "FAIL_ADD_CAR";

export const HANDLE_CLOSE_DROP = "HANDLE_CLOSE_DROP"

export const addCarServer = (
  photos,
  vin,
  carTrim,
  carModel,
  carMileage,
  carColor,
  key,
  vehicleCondition,
  transmision,
  sellDate,
  expectedPrice,
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  postCode,
  message,
  history
) => async (dispatch) => {
  dispatch({ type: BEGIN_ADD_CAR });
  dispatch(showLoading());

  try {
    let formData = new FormData();
    photos.map((photo) => formData.append("Photos", photo));
    formData.append("VIN", vin);
    formData.append("CarTrim", carTrim);
    formData.append("carModel", carModel);
    formData.append("carMileage", carMileage);
    formData.append("carColor", carColor);
    formData.append("key", key);
    formData.append("VehicleCondition", vehicleCondition);
    formData.append("transmision", transmision);
    formData.append("SellDate", sellDate);
    formData.append("expectedPrice", expectedPrice);
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("emailAddress", emailAddress);
    formData.append("phoneNumber", phoneNumber);
    formData.append("postCode", postCode);
    formData.append("message", message);

    const response = await axiosInstance().post("/api/sell", formData);
    dispatch({ type: SUCCESS_ADD_CAR, payload: response });
    history.push("/");

    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: FAIL_ADD_CAR });
    dispatch(hideLoading());
  }
};

export const handleCloseActionDrop = () => {
  return {
    type: HANDLE_CLOSE_DROP
  }
}
