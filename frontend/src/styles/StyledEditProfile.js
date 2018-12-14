import styled from "styled-components";
const StyledEditProfile = styled.div`
  max-width: 600px;
  background-color: ${props => props.theme.secondary};
  margin: 0 auto;
  .img {
    width: 100%;
    height: 100%;
  }
  .aspect-ratio-outer {
    background-color: #eee;
    max-height: 200px;
    position: relative;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-bottom: 33.33%;
    }
  }
  .aspect-ratio-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .aspect-ratio-profile-image {
    max-height: 100px;
    max-width: 100px;
    width: 25%;
    border-radius: 50%;
    margin-top: -12%;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 2px solid white;
    &:before {
      padding-bottom: 100%;
      width: 100%;
    }
  }
  .image-upload-icon {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    background-color: transparent;
    cursor: pointer;
  }

  .profile-image-div {
    display: flex;
    margin-top: 10px;
  }
  .profile-image {
    border-radius: 50%;
  }
`;
export default StyledEditProfile;
