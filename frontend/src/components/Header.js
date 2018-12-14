import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import StyledHeader from "../styles/StyledHeader";
import SearchInput from "./SearchInput";
import {
  homeIcon,
  notificationsIcon,
  searchIcon,
  messageIcon,
  whoToFollowIcon,
  gearIcon
} from "../icons/svgIcons";
import DropdownTriggerer from "./DropdownTriggerer";

const UpperHeader = ({ activeRoute, handleOnChange, me }) => {
  const showRouteTitle = route => {
    switch (route) {
      case "/":
        return <h2>Home</h2>;
      case "/search":
        return <SearchInput handleInput={handleOnChange} />;
      case "/notifications":
        return <h2>Notifications</h2>;
      case "/messages":
        return <h2>Messages</h2>;
      default:
        return null;
    }
  };
  return (
    <div className="upper-header">
      <DropdownTriggerer me={me} />
      <div className="upper-header-middle">
        {window.innerWidth > 1000 ? (
          <SearchInput handleInput={handleOnChange} />
        ) : (
          showRouteTitle(activeRoute)
        )}
      </div>
      <div className="upper-header-last">
        {window.innerWidth > 1000 ? null : activeRoute === "/search" ? (
          <div className="whoToFollow-icon">
            <Link to="/who-to-follow">{whoToFollowIcon}</Link>
          </div>
        ) : activeRoute === "/notifications" ? (
          gearIcon
        ) : null}
      </div>
    </div>
  );
};

class Header extends Component {
  state = {
    name: ""
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { pathname } = this.props.location;
    return (
      <StyledHeader>
        <div className="header-container">
          <UpperHeader
            activeRoute={pathname}
            handleOnChange={this.handleOnChange}
            me={this.props.me}
          />
          <nav className="nav">
            <NavLink
              className="nav-item"
              activeClassName="selected"
              to="/"
              exact
            >
              {homeIcon}
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="selected"
              to="/search"
            >
              {searchIcon}
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="selected"
              to="/notifications"
            >
              {notificationsIcon}
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="selected"
              to="/messages"
            >
              {messageIcon}
            </NavLink>
          </nav>
        </div>
      </StyledHeader>
    );
  }
}
export default withRouter(Header);
