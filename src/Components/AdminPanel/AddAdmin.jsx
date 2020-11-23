import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AdminPanelHeader from "../../Containers/AdminPanelHeader/AdminPanelHeader";
import MyTextInput from "../Home/SendFunc/FormAfterRegister/MyTextInput";
import {
  addAdmin,
  handleClose,
  handleCloseSecond,
} from "../../Redux/adminLogin/adminLoginAction";
import {
  addAdminLoginBeginMine,
  addAdminLoginFailMine,
  addAdminLoginSuccessMineSecond,
} from "../../Redux/adminLogin/adminLoginSelector";
import CustomBackdrop from "../CustomBackdrop";
import CustomSnackbar from "../CustomSnackbar";

const AddAdmin = () => {
  const dispatch = useDispatch();
  const addAdminLoginFail = useSelector(addAdminLoginFailMine);
  const addAdminLoginSuccess = useSelector(addAdminLoginSuccessMineSecond);
  const addAdminLoginBegin = useSelector(addAdminLoginBeginMine);

  const formData = {
    Lname: "",
    email: "",
    password: "",
  };

  return (
    <AdminPanelHeader>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          Fname: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(addAdmin(values.Fname, values.email, values.password));
          resetForm({
            values: {
              Fname: "",
              password: "",
              email: "",
            },
          });
        }}
        validateOnBlur={true}
      >
        {(formik) => {
          return (
            <Form
              className="needs-validation py-5"
              onSubmit={formik.handleSubmit}
              noValidate
            >
              <div className="form-row">
                <div className="form-group col-md-6 offset-md-3 col-sm-12">
                  <MyTextInput
                    label="Your first name"
                    name="Fname"
                    type="text"
                    id="Fname"
                    className="form-control"
                    placeholder="First name"
                    {...formik.getFieldProps("Fname")}
                    value={formik.values.Fname}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 offset-md-3 col-sm-12">
                  <MyTextInput
                    label="Your password"
                    name="password"
                    type="text"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 offset-md-3 col-sm-12">
                  <MyTextInput
                    label="Your e-mail address"
                    name="email"
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    {...formik.getFieldProps("email")}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <button
                  disabled={!formik.isValid}
                  type="submit"
                  className="btn btn-primary btn-md col-md-6 offset-md-3 col-sm-12"
                >
                  SUBMIT
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <CustomSnackbar
        openSnack={addAdminLoginFail}
        handleClose={() => dispatch(handleClose())}
        messageSnack="This is user already existed"
        severity="error"
      />

      <CustomSnackbar
        openSnack={addAdminLoginSuccess}
        handleClose={() => dispatch(handleCloseSecond())}
        messageSnack="User added"
        severity="success"
      />
      <CustomBackdrop loadingOpen={addAdminLoginBegin} />
    </AdminPanelHeader>
  );
};

export default React.memo(AddAdmin);
