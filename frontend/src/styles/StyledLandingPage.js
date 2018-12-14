import styled from "styled-components";

import backgroundImage from "../icons/loginPageBackground.svg";

const StyledLandingPage = styled.div`
  text-align: left;
  font-weight: bold;
  background-color: white;
  .upper-div {
    padding: 0 10px;
    max-width: 400px;
    margin: 0 auto;
    .bird-icon {
      svg {
        height: 35px;
        width: 35px;
      }
    }
    .hero-text {
      display: flex;
      align-items: center;
      font-size: 25px;
    }
    .join-twitter {
      margin: 50px 0 20px 0;
    }
  }

  .background-image {
    background-image: url(${() => backgroundImage});
    background-color: rgba(27, 149, 224, 0.9);
    background-position: 100% 0%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
  }
  .middle-div {
    max-width: 400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .middle-div > div {
    flex: 1;
    width: 100%;
    display: flex;
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    .fill {
      fill: white;
    }
  }
  .middle-div > div div {
    display: flex;
    align-items: center;
  }
`;
export default StyledLandingPage;
