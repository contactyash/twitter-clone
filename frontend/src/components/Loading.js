import React from "react";
import styled from "styled-components";
import { birdIcon } from "../icons/svgIcons";
const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  @media (min-width: 600px) {
    svg {
      height: 50px;
      width: 50px;
    }
  }
`;
const Loading = () => <StyledLoading>{birdIcon}</StyledLoading>;
export default Loading;
