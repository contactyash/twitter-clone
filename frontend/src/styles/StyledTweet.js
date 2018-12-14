import styled from "styled-components";
const StyledTweet = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.secondary};
  align-items: center;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.extraLightGray};

  &:hover {
    background-color: ${props => props.theme.extraExtraLightGray};
    cursor: pointer;
  }
  .img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .avatar {
    border-radius: 50%;
  }
  .aspect-ratio-outer {
    flex-basis: 12%;
    min-width: 20px;
    margin: 0;
    height: 100%;
  }
  .aspect-ratio-avatar {
    border-radius: 50%;
    &:before {
      padding-bottom: 100%;
    }
  }
  .profile-img {
    flex: 1;
    align-self: flex-start;
    max-width: 49px;
    margin: 0 5px;
    height: 100%;
  }
  .tweet {
    flex: 7;
  }
  .name-username-time-moreBtn {
    display: flex;
    a:hover {
      color: ${props => props.theme.blackColor};
      text-decoration: underline;
    }
  }
  .name-username-time {
    display: flex;
    flex: 7;
  }
  .name {
    font-weight: 700;
    color: ${props => props.theme.blackColor};
  }
  .dropDownIcon {
    height: 18px;
    width: 18px;
    padding: 0;
    .fill {
      fill: grey;
    }
  }
  .tweet-text {
    color: ${props => props.theme.blackColor};
  }
`;
export default StyledTweet;
