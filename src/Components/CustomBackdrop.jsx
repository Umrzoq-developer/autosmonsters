import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const CustomBackdrop = ({ loadingOpen }) => {
  return (
    <Backdrop style={{ zIndex: 999, color: "#fff" }} open={loadingOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default React.memo(CustomBackdrop);
