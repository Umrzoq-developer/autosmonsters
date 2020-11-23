import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../Misk/Headings.jsx";
import EmailIllustrationSrc from "../../Assets/PNG/bmww.webp";

const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-blue-500 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`flex justify-center lg:justify-end items-center`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

// const Image = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded bg-contain bg-no-repeat bg-center h-full`,
// ]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-gray-700`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`;
const Input = tw.a`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-blue-500`;

const SubmitButton = tw(PrimaryButton)`inline-block lg:ml-6 mt-6 lg:mt-0 `;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-blue-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "When you need to get in touch with us, all you have to do is utilize any of the resources that we have for you on this page. You can fill out the form at the bottom to send us an email, give one of those numbers a call to get us on the phone, or use the map to see exactly where we are located in Sykesville. We hope to see or hear from you very soon, and we can’t wait to earn your trust.",
  submitButtonText = "Call/Contact Us",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
        <img
                  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                  src={EmailIllustrationSrc}
                  alt="Design Illustration"
                />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Form action={formAction} method={formMethod}>
              <Input href="tel:(443) 552-3131" name="phone">
              (443) 552-3131
              </Input>
              <SubmitButton disabled type="submit">
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
