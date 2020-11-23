import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfileDataMine } from "../../Redux/userProfile/userProfileSelector";
import {
  handleObjectData,
  userProfileLogin,
} from "../../Redux/userProfile/userProfileAction";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBLink,
} from "mdbreact";

const CardExample = () => {
  const dispatch = useDispatch();
  const userProfileData = useSelector(userProfileDataMine);
  console.log(userProfileData, "data");

  useEffect(() => {
    dispatch(userProfileLogin());
  }, [dispatch]);

  return (
    <MDBContainer style={{ marginTop: "100px" }} className="text-secondary">
      <h1 className="h1-responsive my-4 text-secondary">
        History of submitted vehicles
      </h1>
      <MDBRow>
        {userProfileData &&
          userProfileData.map((data, index) => {
            return (
              <MDBCol md="4" style={{ marginTop: "20px" }} key={index}>
                <MDBCard>
                  <MDBCardImage
                    id="Hcards"
                    top
                    src={data.Photos[0]}
                    overlay="white-slight"
                    style={{ height: "250px" }}
                    hover
                    waves
                    alt="image"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{data.carModel}</MDBCardTitle>
                    <hr />
                    <MDBCardText>{data.transmission}</MDBCardText>
                    <MDBLink
                      to={`/Fullhistory/${index}`}
                      className="black-text d-flex justify-content-end"
                      onClick={() => dispatch(handleObjectData(data))}
                    >
                      <h5>
                        Read more
                        <MDBIcon icon="angle-double-right" className="ml-2" />
                      </h5>
                    </MDBLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
