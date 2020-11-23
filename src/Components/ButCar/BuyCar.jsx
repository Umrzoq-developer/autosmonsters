import React from "react";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import "./BuyCar.css";
import DesignIllustration from "../../Assets/PNG/audi.png";
import Func from "../Home/SendFunc/VIN";
import LowerPart from '../LowerPart/LowerPart'
// import AnimationR from "../AnimationRevealPage";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-white`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
export default ({ roundedHeaderButton }) => {
  return (
    <div>
      <div id="back3">
        <Container>
          <TwoColumn>
            <LeftColumn>
              <Heading>Delivering, now and always.</Heading>
              <Paragraph>
                Buy a car entirely online, and have it safely delivered,
                contact-free.
              </Paragraph>
              <Func />
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer>
                <img
                  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                  src={DesignIllustration}
                  alt="Design Illustration"
                />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
        </Container>
      </div>
      <LowerPart/>
    </div>
  );
};
