import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { detailDataMine } from "../../Redux/userProfile/userProfileSelector";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    marginTop: "100px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    width: "100%",
    overflow: "hidden",
  },
}));

const SwipeableTextMobileStepper = () => {
  const classes = useStyles();
  const theme = useTheme();
  const detailData = useSelector(detailDataMine);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = detailData?.Photos?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MDBContainer className={classes.root}>
      <h1 className="h1-responsive my-4 text-primary">
        Details of submitted vehicle
      </h1>
      <MDBRow>
        <MDBCol md="6">
          <div>
            {/* <Paper square elevation={0} className={classes.header}>
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper> */}
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {detailData?.Photos?.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step} alt={index} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </MDBCol>
        <MDBCol md="6" className="text-left text-secondary">
          <h3>
            <strong>VIN Number: </strong> {detailData?.VIN}
          </h3>
          <h3>
            <strong>Car Model: </strong> {detailData?.carModel}
          </h3>
          <h3>
            <strong>Exact Mileage: </strong>
            {detailData?.carMileage}
          </h3>
          <h3>
            <strong>Exterior Color: </strong> {detailData?.carColor}
          </h3>
          <h3>
            <strong>Keys: </strong> {detailData?.key}
          </h3>
          <h3>
            <strong>Transmission: </strong> {detailData?.transmision}
          </h3>
          <h3>
            <strong>Condition of vehicle: </strong>{" "}
            {detailData?.VehicleCondition}
          </h3>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SwipeableTextMobileStepper;
