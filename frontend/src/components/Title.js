import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { backIcon } from "../icons/svgIcons";

const StyledTitle = styled.div`
  background-color: ${props => props.theme.secondary};
  border-bottom: 1px solid lightslategrey;
  .wrapper {
    max-width: 600px;
    height: 49px;
    margin: auto;
    color: ${props => props.theme.blackColor};
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .backIcon {
    vertical-align: middle;
    padding: 0;
  }
  .back {
    flex: 1;
  }
  .backIcon:hover {
    background: ${props => props.theme.extraExtraLightGray};
    border-radius: 50%;
  }
  .title {
    flex: 1 1 70%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
  }
`;
const Title = ({ withBack, skipLastPage, history, title, children }) => (
  <StyledTitle>
    <div className="wrapper">
      {withBack ? (
        <div
          className="back"
          onClick={skipLastPage ? () => history.go(-2) : history.goBack}
        >
          {backIcon}
        </div>
      ) : null}
      <div className="title">{title && title}</div>
      {children}
    </div>
  </StyledTitle>
);
export default withRouter(React.memo(Title));
