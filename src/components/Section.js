import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backGroundImg,
  leftBtnTxt,
  rightBtnTxt,
}) {
  return (
    <Wrap bgImage={backGroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnTxt}</LeftButton>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="./img/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./img/Desktop-Model3 .jpeg");
  background-image: ${(props) => `url("/img/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 5px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.66;
  color: rgb(23, 25, 32);
`;

const DownArrow = styled.img`
  height: 35px;
  animation: animateDown infinite 1.5s;
  overflow: hidden;
`;

const Buttons = styled.div``;
export default Section;
