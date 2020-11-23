import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const CustomSnackbar = ({openSnack, handleClose, messageSnack, severity}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={openSnack}
      onClose={handleClose}
      autoHideDuration={2000}
    >
      <Alert severity={severity}>{messageSnack}</Alert>
    </Snackbar>
  );
};

export default React.memo(CustomSnackbar);
