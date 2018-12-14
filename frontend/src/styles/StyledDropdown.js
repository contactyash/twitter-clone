import styled from "styled-components";
const StyledDropDown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: scroll;
  .dropdown-container {
    background-color: ${props => props.theme.secondary};
    max-width: 240px;
    text-align: left;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.blackColor};
    font-size: 15px;
    line-height: 1.3125;
    padding-bottom: 44px;
    .stats {
      font-weight: 700;
    }
    .followers-title:hover,
    .following-title:hover {
      text-decoration: underline;
    }
    .name {
      font-weight: 700;
      color: ${props => props.theme.blackColor};
    }
    svg {
      height: 19px;
      width: 19px;
      padding: 0;
      margin-right: 10px;
    }
    .fill {
      fill: gray;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
    }
    li {
      display: flex;
      align-items: center;
      padding: 15px 20px;
      color: ${props => props.theme.blackColor};

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.extraExtraLightGray};
      }
    }
    a {
      color: ${props => props.theme.generalColor};
    }

    .followers-stats {
      display: flex;
      justify-content: flex-start;
      padding: 10px 20px;
    }
    .following {
      margin-right: 10px;
    }
    .followers-stats > div {
      display: inline;
    }

    .profile-icon {
      width: 100%;
      padding: 10px 20px 0 20px;
    }
    .avatar {
      height: 49px;
      width: 49px;
      border-radius: 50%;
    }
    .name-username {
      padding: 10px 20px;
    }
    .div-line-break {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .setting-privacy-options {
      li {
        padding: 15px 20px;
      }
    }
    .data-saver,
    .night-mode {
      display: flex;
      padding-right: 8px;
      align-items: center;
      padding: 15px 20px;
    }
    .data-saver-text {
      padding-right: 69px;
    }
    .night-mode-text {
      padding-right: 59px;
    }
  }
`;
const StyledDropDownTrigger = styled.div`
  position: relative;
  margin-left: 10px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
  }
  .profile-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .display-name {
    display: none;
  }
  .drop-down-icon {
    display: none;
  }
  @media (min-width: 1000px) {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    margin-left: 20px;
    padding: 2px 10px;
    &:hover {
      background-color: ${props => props.theme.extraExtraLightGray};
      border-radius: 20px;
    }
    .display-name {
      font-size: 12px;
      display: block;
      margin-left: 10px;
    }

    .profile-icon {
      height: 27px;
      width: 27px;
    }
    .drop-down-icon {
      display: block;
      svg {
        height: 19px;
        width: 19px;
        margin-left: 5px;
        padding: 0;
      }
    }
  }
`;
export default StyledDropDown;
export { StyledDropDownTrigger };
