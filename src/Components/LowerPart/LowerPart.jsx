import React from "react";
import tw from "twin.macro";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from "mdbreact";
import { SectionHeading, Subheading as SubheadingBase } from "../Misk/Headings";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
const Heading = tw(SectionHeading)``;
const ContactPage = () => {
  return (
    <MDBContainer className="my-5">
      <Heading> Questions?</Heading>
      <MDBRow className="mt-5 mb-3">
        <MDBCol>
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>1551 W Old Liberty Rd, Sykesville,</p>
              <p className="mb-md-0">MD 21784</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
             <p><a href="tel:(443) 552-3131">(443) 552-3131</a></p>
              <p className="mb-md-0">Mon - Sat, 9:00-7:00 PM</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactPage;
