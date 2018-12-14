import styled from "styled-components";
const StyledHome = styled.div`
  position: relative;
  height: 100vh;
  .tweet-now-icon {
    background-color: ${props => props.theme.primary};
    height: 40px;
    width: 40px;
    padding: 8px;
    border-radius: 50%;
    position: fixed;
    bottom: 5%;
    right: 5%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.22) 0px 3px 6px;

    .fill {
      fill: ${props => props.theme.secondary};
    }
  }
  .home-feed {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .whoToFollow {
    width: 425px;
    margin: 10px;
  }
  .new-tweet {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.secondary};
    padding: 10px;
    border-bottom: 1px solid ${props => props.theme.extraLightGray};

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin: 0 10px;
    }
  }
  @media screen and (min-width: 1000px) {
    .feed {
      margin: 10px;
    }
  }
  @media screen and (max-width: 1000px) {
    .new-tweet {
      display: none;
    }
    .whoToFollow {
      display: none;
    }
    .feed {
      margin-top: 0;
    }
  }
`;

export default StyledHome;
