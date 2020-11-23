import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import logo from "../../Assets/dealer-logo.png";
import { MDBContainer } from "mdbreact";
import { FontProvider } from "./Fonts/Font";
import { Font } from "./Fonts/Font";
import { ColumnToRow, Item } from "@mui-treasury/components/flex";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from "@mui-treasury/components/EmailSubscribe";
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from "@mui-treasury/components/menu/category";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";

import { useMagCategoryMenuStyles } from "@mui-treasury/styles/categoryMenu/mag";
import { usePoofSocialLinkStyles } from "@mui-treasury/styles/socialLink/poof";
import { useReadyEmailSubscribeStyles } from "@mui-treasury/styles/emailSubscribe/ready";
import { usePlainNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/plain";
const darkTheme = createMuiTheme({ palette: { type: "dark" } });

const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: "cover",
    overflow: "hidden",
  },
  middle: {
    backgroundColor: palette.type === "dark" ? "#192D36" : palette.action.hover,
  },
  bottom: {
    backgroundColor:
      palette.type === "dark" ? "#0F2128" : palette.action.selected,
  },
  newsletterText: {
    color: "#fff",
    fontSize: "0.875rem",
    textTransform: "uppercase",
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: "0.875rem",
  },
  legalLink: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.75rem",
    justifyContent: "center",
    color: palette.text.hint,
    letterSpacing: "0.5px",
  },
  divider: {
    height: 2,
    margin: "-1px 0",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    filter: "grayscale(80%)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  info: {
    ...typography.caption,
    color: palette.text.hint,
    marginTop: 8,
  },
}));

export const Footer = React.memo(function ArcAppFooter() {
  const scrollToTop = () => window.scrollTo(0, 0);
  const classes = useStyles();
  const location = useLocation();

  if (location?.pathname === "/admin") {
    return null;
  }
  return (
    <FontProvider
      fonts={[{ font: "Rambla", weights: [400, 700] }, { font: "Nunito" }]}
    >
      <Box width={"100%"}>
        <Box px={2} py={10} className={classes.middle}>
          <Container disableGutters>
            <MDBContainer>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4} lg={3}>
                  <Box
                    component={"img"}
                    mt={-3}
                    // width={120}
                    height={64}
                    src={logo}
                    alt=""
                    borderRadius={12}
                  />
                  <Typography className={classes.info}>
                    <Font index={1}>
                      TRUST AUTO Inc., 1551 W Old Liberty Rd, Sykesville, MD
                      21784
                    </Font>
                  </Typography>

                  <Typography className={classes.info}>
                    <Font index={1}>
                      <a href="tel:(443) 552-3131">(443) 552-3131</a>
                    </Font>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                      <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                        <CategoryTitle>
                          <Font>Information</Font>
                        </CategoryTitle>
                        {/* <CategoryItem>
                        <Font index={1}>
                          <Link to="" onClick={scrollToTop()}>
                            License
                          </Link>
                        </Font>
                      </CategoryItem> */}
                        <CategoryItem>
                          <Font index={1}>
                            <Link to="/privacyvspolicy" onClick={scrollToTop}>
                              Privacy Policy
                            </Link>
                          </Font>
                        </CategoryItem>
                        <CategoryItem>
                          <Font index={1}>
                            <Link to="/termsofservice" onClick={scrollToTop}>
                              Terms of Service
                            </Link>
                          </Font>
                        </CategoryItem>
                        <CategoryItem>
                          <Font index={1}>
                            <Link to="/faq" onClick={scrollToTop()}>
                              FAQ
                            </Link>
                          </Font>
                        </CategoryItem>
                      </CategoryProvider>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                        <CategoryTitle>About Us</CategoryTitle>
                        <CategoryItem>
                          <Font index={1}>
                            <Link to="/contact" onClick={scrollToTop()}>
                              Contact
                            </Link>
                          </Font>
                        </CategoryItem>
                        <CategoryItem>
                          <Font index={1}>
                            <Link to="/about" onClick={scrollToTop()}>
                              Team
                            </Link>
                          </Font>
                        </CategoryItem>
                        {/* <CategoryItem>
                        <Font index={1}>Support</Font>
                      </CategoryItem> */}
                      </CategoryProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8} lg={3} style={{ marginLeft: "auto" }}>
                  <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                    <CategoryTitle>
                      <Font>Subscribe</Font>
                    </CategoryTitle>
                  </CategoryProvider>
                  <SocialProvider useStyles={usePoofSocialLinkStyles}>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialLink brand={"LinkedIn"} />
                    </a>
                    <a
                      href="https://twitter.com/mdtrustauto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialLink brand={"Twitter"} />
                    </a>
                    <a
                      href="https://www.facebook.com/trustautoinc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialLink brand={"Facebook"} />
                    </a>
                    <a
                      href="https://instagram.com/trustautomd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialLink brand={"Instagram"} />
                    </a>
                  </SocialProvider>
                </Grid>
              </Grid>
            </MDBContainer>
          </Container>
        </Box>
        <Container disableGutters>
          <Divider className={classes.divider} />
        </Container>
        <Box px={2} py={3} className={classes.bottom}>
          <Container disableGutters>
            <ColumnToRow
              at={"md"}
              columnStyle={{ alignItems: "center" }}
              rowStyle={{ alignItems: "unset" }}
            >
              <Item grow ml={-2} shrink={0}>
                <NavMenu useStyles={usePlainNavigationMenuStyles}>
                  <ColumnToRow at={"sm"}>
                    <NavItem className={classes.legalLink}>
                      <Font>
                        <Link to="/termsofservice" onClick={scrollToTop}>
                          Terms & Conditions
                        </Link>
                      </Font>
                    </NavItem>
                    <NavItem className={classes.legalLink}>
                      <Font>
                        <Link to="/privacyvspolicy" onClick={scrollToTop}>
                          Privacy Policy
                        </Link>
                      </Font>
                    </NavItem>
                  </ColumnToRow>
                </NavMenu>
              </Item>
              <Item>
                <Box py={1} textAlign={{ xs: "center", md: "right" }}>
                  <Typography
                    component={"p"}
                    variant={"caption"}
                    color={"textSecondary"}
                  >
                    <Font index={1}>
                      Made by Developers team of TRUST AUTO Inc. © 2020 All
                      right reserved
                    </Font>
                  </Typography>
                </Box>
              </Item>
            </ColumnToRow>
          </Container>
        </Box>
      </Box>
    </FontProvider>
  );
});
