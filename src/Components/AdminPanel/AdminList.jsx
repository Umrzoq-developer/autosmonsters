import React, { useEffect } from "react";
import AdminPanelHeader from "../../Containers/AdminPanelHeader/AdminPanelHeader";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  adminSeller,
  deleteSellerById,
  handleDeleteCloseFail,
  handleDeleteCloseSuccess,
  handleSellerData,
} from "../../Redux/seller/sellerAction";
import {
  countMine,
  deleteUserByIdBeginMine,
  deleteUserByIdFailMine,
  deleteUserByIdSuccessMine,
  sellerDataMine,
} from "../../Redux/seller/sellerSelector";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomModal from "./CustomModal";
import CustomSnackbar from "../CustomSnackbar";
import CustomBackdrop from "../CustomBackdrop";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const AdminList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const sellerData = useSelector(sellerDataMine);
  const count = useSelector(countMine);
  const deleteUserByIdBegin = useSelector(deleteUserByIdBeginMine);
  const deleteUserByIdSuccess = useSelector(deleteUserByIdSuccessMine);
  const deleteUserByIdFail = useSelector(deleteUserByIdFailMine);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpen = (data) => {
    setOpenModal(!openModal);
    dispatch(handleSellerData(data));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(sellerData, "sellerData");
  useEffect(() => {
    dispatch(adminSeller());
  }, [dispatch]);

  return (
    <AdminPanelHeader>
      <h6 style={{ textAlign: "left" }}>List of Users</h6>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right">More</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellerData &&
              sellerData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.FirstName}
                    </TableCell>
                    <TableCell align="right">{row.LastName}</TableCell>
                    <TableCell align="right">{row.emailAddress}</TableCell>
                    <TableCell align="right">{row.phoneNumber}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<MoreHorizIcon />}
                        onClick={() => handleOpen(row)}
                      >
                        More
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(deleteSellerById(row?._id))}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <CustomModal open={openModal} handleClose={handleOpen} />

      <CustomSnackbar
        openSnack={deleteUserByIdSuccess}
        severity="success"
        messageSnack="Successfully Deleted"
        handleClose={() => dispatch(handleDeleteCloseSuccess())}
      />

      <CustomSnackbar
        openSnack={deleteUserByIdFail}
        severity="error"
        messageSnack="There is an error of deleting!"
        handleClose={() => dispatch(handleDeleteCloseFail())}
      />

      <CustomBackdrop loadingOpen={deleteUserByIdBegin} />
    </AdminPanelHeader>
  );
};

export default React.memo(AdminList);
