import React, { Component } from "react";
import StyledToggleBtn from "../styles/StyledToggleBtn";

class ToggleButton extends Component {
  handleOnClick = () => {
    this.props.handleOnClick();
  };
  render() {
    return (
      <StyledToggleBtn
        active={this.props.toggleState}
        onClick={() => this.handleOnClick()}
      >
        <div className="inner-div" />
      </StyledToggleBtn>
    );
  }
}
export default ToggleButton;
