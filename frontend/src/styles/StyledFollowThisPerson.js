import styled from "styled-components";
const StyledFollowThisPerson = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  padding: 5px;
  background-color: ${props => props.theme.secondary};
  border-bottom: 1px solid ${props => props.theme.extraLightGray};
  &:hover {
    background-color: ${props => props.theme.extraExtraLightGray};
  }
  .img {
    height: 100%;
    width: 100%;
  }
  .avatar {
    border-radius: 50%;
  }
  .aspect-ratio-outer {
    flex-basis: 12%;
    min-width: 20px;
    margin: 0 4px;
    height: 100%;
  }
  .aspect-ratio-avatar {
    border-radius: 50%;
    &:before {
      padding-bottom: 100%;
    }
  }
  .profile-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
  .name-username-followBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
  }
  .name-username {
    flex: 1;
    /* display: flex; */
  }
  .followBtn {
    min-width: 74px;
  }
  .bio {
    padding-top: 5px;
  }
`;
export default StyledFollowThisPerson;
