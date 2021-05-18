import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backGroundImg="Desktop-Model3.jpeg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backGroundImg="Desktop-ModelY.jpeg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backGroundImg="Desktop-ModelS.jpeg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backGroundImg="Desktop-ModelX.jpeg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backGroundImg="Desktop-SolarPanels.jpeg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backGroundImg="Desktop-SolarRoof.jpeg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />

      <Section
        title="Accessories"
        backGroundImg="Desktop-Accessories.jpg"
        leftBtnTxt="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
