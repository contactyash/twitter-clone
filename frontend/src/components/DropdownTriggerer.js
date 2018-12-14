import React, { Component } from "react";
import ReactDOM from "react-dom";
import defaultProfileImage from "../assets/defaultProfile.png";
import { StyledDropDownTrigger } from "../styles/StyledDropdown";
import { dropDownIcon } from "../icons/svgIcons";
import ProfileDropDown from "./ProfileDropDown";

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.dropDownRoot = document.getElementById("dropdown-root");
    this.elem = document.createElement("div");
  }
  componentDidMount() {
    this.dropDownRoot.appendChild(this.elem);
  }
  componentWillUnmount() {
    this.dropDownRoot.removeChild(this.elem);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.elem);
  }
}

class DropDownTriggerer extends Component {
  state = {
    showDetail: false
  };
  dropDownTriggerer = React.createRef();
  onClose = () => this.setState({ showDetail: false });
  handleOnClick = () => this.setState({ showDetail: true });
  componentDidMount() {
    //to postion dropdown relative to its triggerer
    this.offset = this.dropDownTriggerer.current.getBoundingClientRect();
  }

  render() {
    const { profileImgUrl, name } = this.props.me;
    return (
      <>
        <StyledDropDownTrigger
          classsName="profile-dropdown-icon"
          onClick={this.handleOnClick}
          ref={this.dropDownTriggerer}
        >
          <div className="profile-icon">
            <img
              src={!!profileImgUrl ? profileImgUrl : defaultProfileImage}
              alt={name}
            />
          </div>
          <div className="display-name">
            <b>{name}</b>
          </div>
          <div className="drop-down-icon">{dropDownIcon}</div>
        </StyledDropDownTrigger>
        {this.state.showDetail && (
          <Portal>
            <ProfileDropDown
              onClose={this.onClose}
              dropDownPosition={this.offset}
              me={this.props.me}
            />
          </Portal>
        )}
      </>
    );
  }
}
export default DropDownTriggerer;
