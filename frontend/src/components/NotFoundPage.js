import React from "react";
import styled from "styled-components";
const StyledNotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: ${props => props.theme.primary};
  font-size: 40px;
  font-weight: bold;
  padding: 30px;
`;
const NotFoundPage = () => (
  <StyledNotFoundPage>
    <div>
      You seem to be reach here searching Rahul Gandhi's brain, you tried hard
      ,you reached the end. sorry but you are searching something which doesn't
      exists
    </div>
  </StyledNotFoundPage>
);
export default NotFoundPage;
