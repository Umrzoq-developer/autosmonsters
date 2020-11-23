import React from "react";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { handlingDataMine } from "../../Redux/seller/sellerSelector";
import CircularProgress from "@material-ui/core/CircularProgress";

const CustomModal = ({ open, handleClose }) => {
  const handlingData = useSelector(handlingDataMine);

  console.log(handlingData);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title" onClose={handleClose}>
        Vin: {handlingData?.VIN}
      </DialogTitle>
      <DialogContent dividers={true}>
        <div className="row">
          {handlingData.Photos && handlingData ? (
            handlingData.Photos.map((photo, index) => {
              return (
                <div className="col-md-4 col-sm-12 mt-2" key={index}>
                  <img
                    style={{ width: "90%", margin: "0 auto" }}
                    src={photo}
                    alt="index"
                  />
                </div>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </div>
        <h5 className="mt-4 mb-3">Full Information: </h5>
        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Firstname:</b> {handlingData?.FirstName}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>Lastname:</b> {handlingData?.LastName}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>SellDate:</b> {handlingData?.SellDate}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>Condition:</b> {handlingData?.VehicleCondition}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Mileage:</b> {handlingData?.carMileage}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>Model:</b> {handlingData?.carModel}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Email:</b> {handlingData?.emailAddress}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>Price:</b> {handlingData?.expectedPrice}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Transmision:</b> {handlingData?.transmision}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>PhoneNumber:</b> {handlingData?.phoneNumber}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Key:</b> {handlingData?.key}
          </p>
          <p className="col-md-6 col-sm-12">
            <b>Zip Code:</b> {handlingData?.postCode}
          </p>
        </div>

        <div className="row">
          <p className="col-md-6 col-sm-12">
            <b>Color:</b> {handlingData?.carColor}
          </p>
        </div>

        <div className="row">
          <p className="col-md-12">
            <b>Message:</b> {handlingData?.message}
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;

// {
//   handlingData.Keys && handlingData?.Keys.map((photo, index) => {
//     return(
//       <img src={photo?.Key} key={index} alt=""/>
//     )
//   })
// }
