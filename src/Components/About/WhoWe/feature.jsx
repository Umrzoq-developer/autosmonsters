import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../../Misk/Headings";
import { Container as ContainerBase } from "../../Misk/Layout";
import About from "../about";

const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-600 max-w-xl`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;
const Container = tw(ContainerBase)` text-blue-600 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(
  SectionHeading
)`sm:text-3xl md:text-4xl lg:text-5xl text-gray-600`;
const Subheading = tw(SubheadingBase)`text-blue-600 text-center`;
const Description = tw(
  SectionDescription
)`text-gray-800 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium text-gray-800`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default ({
  subheading = "",
  heading = "Over 9000 Projects Completed",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats = [
    {
      key: "Cars available",
      value: "3000+",
    },
    {
      key: "Makes & Models",
      value: "100+",
    },
    {
      key: "Happy Costumers",
      value: "100k",
    },
    {
      key: "Dedicated Employees",
      value: "150+",
    },
    {
      key: "Acres of Vehicle Reconditioning",
      value: "100",
    },
  ],
}) => {
  return (
    <>
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeadingContainer>
          <StatsContainer>
            {stats.map((stat, index) => (
              <Stat key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatKey>{stat.key}</StatKey>
              </Stat>
            ))}
          </StatsContainer>
        </ContentWithPaddingXl>
      </Container>
      <About />
    </>
  );
};
