import React from "react";
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
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";



const ContactPage = () => {
  return (
    <MDBContainer className="my-3">
      <h2 className="h1-responsive font-weight-bold text-center mb-5 ">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 text-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49296.27466412027!2d-77.053122!3d39.446344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8304c14d26e41%3A0x4ae0fc77d021ac32!2s1551%20W%20Old%20Liberty%20Rd%2C%20Sykesville%2C%20MD%2021784!5e0!3m2!1sru!2sus!4v1605710770919!5m2!1sru!2sus"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
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
