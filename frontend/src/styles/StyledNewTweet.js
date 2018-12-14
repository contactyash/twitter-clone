import styled from "styled-components";

const StyledNewTweet = styled.div`
  background-color: ${props => props.theme.secondary};
  height: 100vh;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 0px auto;
  }

  img {
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }

  .lengthBar {
    margin-right: 4px;
  }
  .profile-icon {
    flex: 1;
    padding-top: 10px;
    margin: 0 4px;
    align-self: flex-start;
    border-radius: 50%;
  }
  .tweet {
    justify-self: stretch;
    flex: 1 1 70%;
    padding: 5px;
    margin: 0;
  }
  .textarea-container {
    position: relative;
    height: 70px;
    background-color: ${props => props.theme.extraExtraLightGray};
    border-bottom: 2px solid ${props => props.theme.primary};
    &:focus-within {
      border: none;
      outline: none;
      border-bottom: 2px solid ${props => props.theme.primary};
    }
  }
  .fake-div {
    padding: 10px;
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    text-align: left;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    color: ${props => props.theme.primary};
    background-color: transparent;
    span {
      background-color: #ffb8c2;
    }
  }
  .textarea {
    padding: 10px;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    right: 0;
    color: ${props => props.theme.primary};

    font-weight: 400;
    font-family: "Segoe UI", "Open Sans", sans-serif;
    font-size: 15px;
    background-color: transparent;
    width: 100%;
    min-width: 0px;

    height: 100%;
    display: block;
    resize: none;
    border-radius: 2px;
    border: 0;
    &:focus {
      border: none;
      outline: none;
    }
  }
  .vl {
    background-color: gray;
    height: 25px;
    border-left: 1px solid ${props => props.theme.lightGray};
    margin: 0 4px;
  }
  .lengthBar-anotherTweet {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-tweet {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #8ed0f9;
  }
  .add-tweet.active {
    background-color: ${props => props.theme.primary};
  }
  .empty-middle-div {
    flex: 5;
  }
  .add-imageGifPoll {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addMedia-options {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addIcon {
    height: 20px;
    width: 20px;
    padding: 2px;
    .fill {
      fill: ${props => props.theme.secondary};
    }
  }
`;
export default StyledNewTweet;
