import React, { useState } from "react";
import { MDBContainer, MDBCol } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as SubmitButtonIcon } from "feather-icons/dist/icons/log-in.svg";
import styled from "styled-components";
import tw from "twin.macro";
import Alert from "./Alert";
import { getVinNumber } from "../../../Redux/VinNumber/VinNumberAction";
import { useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getVinDataBeginMine } from "../../../Redux/VinNumber/VinNumberSelector";
import CustomBackdrop from "../../CustomBackdrop";

const Agent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [VIN, setVIN] = useState("");
  const getVinDataBegin = useSelector(getVinDataBeginMine);

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  const changeHandler = (event) => {
    setVIN(event.target.value);
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    dispatch(getVinNumber(VIN, history));
  };

  let SubmitButton = styled.button`
    ${tw` tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
    .icon {
      ${tw`w-6 h-6 -ml-2`}
    }
    .text {
      ${tw`ml-3`}
    }
  `;
  const enabled = VIN.length > 16;
  if (enabled) {
    SubmitButton = styled.button`
      ${tw` tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
      .icon {
        ${tw`w-6 h-6 -ml-2`}
      }
      .text {
        ${tw`ml-3`}
      }
    `;
  }
  return (
    <MDBContainer fluid id="rty">
      <MDBCol className="py-3 border shadow bg-white">
        <form className="needs-validation" onSubmit={submitHandler} noValidate>
          <p className="h5 text-center mb-4">
            Enter Your Automobile`s VIN number
          </p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Vehicle Identification Number.
          </label>
          <input
            value={VIN}
            name="VIN"
            type="text"
            id="defaultFormLoginEmailEx"
            className="form-control"
            onChange={changeHandler}
            maxLength="17"
            minLength="17"
            required
          />
          <Alert />
          <br />
          <div className="text-center">
            <SubmitButton
              type="submit"
              disabled={!enabled}
              onClick={postDataHandler}
            >
              <SubmitButtonIcon className="icon" />
              <span className="text">What is my car worth</span>
            </SubmitButton>
          </div>
        </form>
      </MDBCol>
      <CustomBackdrop loadingOpen={getVinDataBegin} />
    </MDBContainer>
  );
};
export default React.memo(Agent);
