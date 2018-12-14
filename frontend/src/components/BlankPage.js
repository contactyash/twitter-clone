import React from "react";
import styled from "styled-components";

const StyledBlankPage = styled.div`
  width: ${props => (props.w ? props.w : "600px")};
  height: ${props => (props.h ? props.h : "50vh")};
  margin: 10px auto;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BlankPage = ({ h, w, error, children }) => (
  <StyledBlankPage h={h} w={w}>
    {error && <div className="error">something seems wrong</div>}
    {children && <div>{children}</div>}
  </StyledBlankPage>
);
export default BlankPage;
