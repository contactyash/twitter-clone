import styled from "styled-components";

const StyledProfileInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.secondary};
  height: 100vh;
  .img {
    height: 100%;
    width: 100%;
  }
  .avatar {
    border-radius: 50%;
  }
  .aspect-ratio-outer {
    position: relative;
    background-color: ${props => props.theme.ligthGray};
    max-height: 200px;
  }
  .aspect-ratio-outer:before {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 33.33%;
  }
  .aspect-ratio-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .profile-info {
    padding: 10px 10px 0 10px;
    text-align: left;
  }
  .name,
  b {
    font-size: 15px;
    color: rgb(20, 23, 26);
    font-weight: 700;
  }
  .avatar-editBtn-div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .name-username {
    margin-bottom: 10px;
  }
  .avatar-div {
    width: 25%;
    max-width: 145px;
    min-width: 20px;
    margin-top: -18%;
    margin-bottom: 10px;
  }
  .aspect-ratio-avatar {
    border: 2px solid white;
    border-radius: 50%;
    &:before {
      padding-bottom: 100%;
    }
  }
  .bio {
    margin-bottom: 10px;
  }
  .joined-location-website {
    display: inline-block;
    padding: 10px 0;
  }
  .calenderIcon,
  .locationIcon,
  .linkIcon {
    height: 18px;
    width: 18px;
    vertical-align: text-bottom;
    padding: 0;
  }
  .fill {
    fill: grey;
  }
  .social-stats {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
  .followers-count {
    margin-right: 10px;
  }
  .horizontal-nav {
    border-bottom: 2px solid #eee;
  }
  .nav-list {
    display: flex;
    flex: 1;
    color: rgb(101, 119, 134);
  }
  .list-item {
    flex: 1;
    padding: 15px;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
  }
  .list-item:hover {
    background-color: ${props => props.theme.extraExtraLightGray};
    color: ${props => props.theme.primary};
  }
  .list-item:active {
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`;
export default StyledProfileInfo;
