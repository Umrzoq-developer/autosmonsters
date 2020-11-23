import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container as ContainerBase } from "../Misk/Layout";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../Assets/PNG/pradoG.png";
import logo from "../../Assets/logo512.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { adminLogin, handleAdminLoginDrop } from "../../Redux/adminLogin/adminLoginAction";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {
  adminLoginBeginMine,
  adminLoginFailMine,
} from "../../Redux/adminLogin/adminLoginSelector";
import CustomBackdrop from "../CustomBackdrop";
import CustomSnackbar from "../CustomSnackbar";

const Container = tw(
  ContainerBase
)`min-h-screen text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img` mx-auto`;
const MainContent = tw.div` flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0  bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const AdminLogin = ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign In To Admin Panel",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPas, setShowPas] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const fetchLogin = (e) => {
    e.preventDefault();
    dispatch(adminLogin(email, password, history));
  };

  const handleShowPass = () => {
    setShowPas(!showPas);
  };

  const beginLoginAdmin = useSelector(adminLoginBeginMine);
  const adminLoginFail = useSelector(adminLoginFailMine)

  return (
    <Container id="GColor">
      <Content>
        <MainContainer>
          {/* <LogoLink href={logoLinkUrl}> */}
          <LogoImage src={logo} />
          {/* </LogoLink> */}
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer></SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Sign in to Admin panel</DividerText>
              </DividerTextContainer>
              <Form onSubmit={fetchLogin}>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <div style={{ position: "relative", marginTop: "10px" }}>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPas ? "password" : "text"}
                    placeholder="Password"
                  />
                  <IconButton
                    style={{ position: "absolute", right: "3%", top: "3%" }}
                    aria-label="show"
                    onClick={handleShowPass}
                  >
                    {showPas ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </div>
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>

      <CustomSnackbar
        openSnack={adminLoginFail}
        handleClose={() => dispatch(handleAdminLoginDrop())}
        messageSnack="This is user is not registered"
        severity="error"
      />
      <CustomBackdrop loadingOpen={beginLoginAdmin} />

    </Container>
  );
};

export default React.memo(AdminLogin);
