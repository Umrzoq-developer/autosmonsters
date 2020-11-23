import React, { useState } from "react";
import logo from "../../Assets/logo512.png";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import HistoryIcon from "@material-ui/icons/History";
import ChatIcon from "@material-ui/icons/Chat";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoadingBar from "react-redux-loading-bar";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./header.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { makeLogout } from "../../Redux/Auth/AuthActions";
import { succesLoginMine } from "../../Redux/Auth/AuthSelector";

// import Brand from "../../Assets/logo-2.png";

const Header = () => {
  const [collapseID, setCollapseID] = useState(false);
  const succesLogin = useSelector(succesLoginMine);
  const dispatch = useDispatch();
  const location = useLocation();

  const toggleCollapse = () => {
    window.scrollTo(0, 0);
    setCollapseID(!collapseID);
  };

  const toggleCollapseMine = () => {
    window.scrollTo(0, 0);
    setCollapseID(!collapseID);
    dispatch(makeLogout());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const token = localStorage.getItem("token");

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={toggleCollapse}
    />
  );

  if (location?.pathname === "/admin") {
    return null;
  }

  return (
    <div>
      <div className="flyout">
        <MDBNavbar id="navcol" dark expand="md" fixed="top" scrolling>
          <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
            <h2 style={{ height: "2.5rem", width: "2.5rem" }}>
              <img src={logo} alt="qwerty" height="10" />
            </h2>
            {/* <strong className="align-middle"></strong> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse
            className="text-left"
            id="mainNavbarCollapse"
            isOpen={collapseID}
            navbar
          >
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink exact to="/" onClick={toggleCollapse}>
                  <strong>Home</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink onClick={toggleCollapse} to="/about">
                  <strong>About</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink onClick={toggleCollapse} to="/sell">
                  <strong>Sell your car</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink onClick={toggleCollapse} to="/faq">
                  <strong>FAQ</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink onClick={toggleCollapse} to="/contact">
                  <strong>Contact</strong>
                </MDBNavLink>
              </MDBNavItem>

              {token || succesLogin ? (
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem>
                        <Link onClick={toggleCollapse} to="/history">
                          {" "}
                          <HistoryIcon />
                          <strong> History</strong>
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link onClick={toggleCollapse} to="/chat">
                          {" "}
                          <ChatIcon />
                          <strong> Chat</strong>
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>
                        <Link onClick={toggleCollapseMine} to="/">
                          <ExitToAppIcon />
                          <strong> Logout</strong>
                        </Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              ) : (
                <MDBNavItem>
                  <MDBNavLink onClick={toggleCollapse} to="/login">
                    <strong>Login</strong>
                  </MDBNavLink>
                </MDBNavItem>
              )}

              <div id="ul-navbar">
                <MDBNavItem>
                  <MDBTooltip
                    placement="bottom"
                    domElement
                    style={{ display: "block" }}
                  >
                    <a
                      className="nav-link Ripple-parent"
                      href="https://www.youtube.com/channel/UCyapAPOeRJ-SVktkNszRhvQ?_ga=2.116125317.2081304902.1605710611-609537925.1605092947"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>
                        <MDBIcon fab icon="youtube" />
                      </strong>
                    </a>
                    <span>YOUTUBE</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip
                    placement="bottom"
                    domElement
                    style={{ display: "block" }}
                  >
                    <a
                      className="nav-link Ripple-parent"
                      href="https://www.facebook.com/trustautoinc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>
                        <MDBIcon fab icon="facebook" />
                      </strong>
                    </a>
                    <span>FACEBOOK</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                  <MDBTooltip
                    placement="bottom"
                    domElement
                    style={{ display: "block" }}
                  >
                    <a
                      className="nav-link Ripple-parent"
                      href="https://instagram.com/trustautomd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>
                        <MDBIcon fab icon="instagram" />
                      </strong>
                    </a>
                    <span>INSTAGRAM</span>
                  </MDBTooltip>
                </MDBNavItem>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {collapseID && overlay}
      </div>
      <LoadingBar style={{zIndex: "9999", backgroundColor: "blue"}} />
    </div>
  );
};
export default React.memo(Header);
