import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import myVIN from "../../../Assets/myVin.jpg";
import { MDBRow, MDBCol } from "mdbreact";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Where is my VIN?
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="text-center"
      >
        <DialogTitle
          className="text-primary"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          What's a VIN, and where's mine?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            A Vehicle Identification Number (VIN) is like a thumbprint for your
            car. It's 17 characters long (digits and letters) and looks like
            this:
          </Typography>
          <Typography gutterBottom color="secondary">
            <h3 className="border-top border-bottom py-2 h3-reponsive">
              <strong>3C6UR5FLXFG692365</strong>
            </h3>
          </Typography>
          <Typography gutterBottom>
            You can find your VIN in several different places...
          </Typography>
          <img src={myVIN} alt="VIN" className="img-fluid px-5" />
          <MDBRow className="text-left">
            <MDBCol md="6" sm="6">
              <h2 className="h2-reponsive text-primary">
                <strong>On Your Car</strong>
              </h2>
              <br />
              <ul>
                <li>-Driver's side interior dash</li>
                <li>-Under the hood (up front)</li>
                <li>-Between your front carb and windshield washer unit</li>
                <li>-Trunk, under the spare tire</li>
                <li>-Rear wheel wall</li>
                <li>-Driver door jam (open the door first)</li>
              </ul>
            </MDBCol>
            <MDBCol md="6" sm="6">
              <h3 className="h3-reponsive text-primary">
                <strong>In Your Documentation</strong>
              </h3>
              <br />
              <ul>
                <li>-Vehicle title</li>
                <li>-Registration card</li>
                <li>-Insurance documents</li>
                <li>-Owner's manual</li>
                <li>-Body shop repair records</li>
                <li>-Police reports</li>
                <li>-Vehicle history report or VIN check</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </DialogContent>

        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
