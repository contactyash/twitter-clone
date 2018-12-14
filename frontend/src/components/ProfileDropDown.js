import React from "react";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import StyledDropDown from "../styles/StyledDropdown";
import {
  profileIcon,
  momentsIcon,
  listIcon,
  bookmarkIcon
} from "../icons/svgIcons";
import yash from "../assets/defaultProfile.png";
import { AppContext } from "../App";
import { LOGOUT_MUTATION } from "../mutations";

const ProfileDropDown = ({ onClose, dropDownPosition, ...props }) => {
  const {
    id,
    name,
    email,
    profileImgUrl,
    followersCount,
    followingCount
  } = props.me;
  const username = email.split("@")[0];
  return (
    <Mutation
      mutation={LOGOUT_MUTATION}
      onCompleted={() => props.history.push(`/landing`)}
    >
      {(mutation, { client }) => (
        <StyledDropDown onClick={() => onClose()}>
          <div
            className="dropdown-container"
            style={{
              position: "absolute",
              top: dropDownPosition.top - 8,
              left: dropDownPosition.left - 10
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="profile-basic-info">
              <div className="profile-icon">
                <div className="avatar">
                  <Link to={`/profile-info/${id}`}>
                    <img
                      src={!!profileImgUrl ? profileImgUrl : yash}
                      alt="someone's profile pic"
                    />
                  </Link>
                </div>
              </div>
              <div className="name-username">
                <Link to={`/profile-info/${id}`}>
                  <div className="name">{name}</div>
                  <div>@{username}</div>
                </Link>
              </div>
              <div className="followers-stats">
                <div className="following">
                  <span className="stats">{followingCount} </span>
                  <span className="following-title">
                    <Link to="/following">Following</Link>
                  </span>
                </div>
                <div className="follower">
                  <span className="stats">{followersCount} </span>
                  <span className="followers-title">
                    <Link to="/followers">Follower</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="other-profile-options">
              <ul>
                <Link to={`/profile-info/${id}`}>
                  <li>{profileIcon} Profile</li>
                </Link>
                <a href="/">
                  <li>{listIcon} Lists</li>
                </a>
                <a href="/">
                  <li>{bookmarkIcon} Bookmarks</li>
                </a>
                <a href="/">
                  <li>{momentsIcon} Moments</li>
                </a>
              </ul>
            </div>
            <div className="div-line-break" />
            <div className="setting-privacy-options">
              <ul>
                <a href="/">
                  <li>Setting and privacy</li>
                </a>
                <a href="/">
                  <li>Help Center</li>
                </a>
                <li
                  onClick={() => {
                    localStorage.removeItem("me");
                    client.resetStore();
                    mutation();
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
            <div className="div-line-break" />
            <div className="data-saver-night-mode">
              <div className="data-saver">
                <div className="data-saver-text">Data saver</div>
                <ToggleButton handleOnClick={() => {}} />
              </div>
              <AppContext.Consumer>
                {context => (
                  <div className="night-mode">
                    <div className="night-mode-text">Night mode</div>
                    <ToggleButton
                      toggleState={context.state.invertTheme}
                      handleOnClick={() => {
                        console.log("hello");
                        localStorage.setItem(
                          "nightMode",
                          JSON.stringify(!context.state.invertTheme)
                        );
                        context.updateState({
                          invertTheme: !context.state.invertTheme
                        });
                      }}
                    />
                  </div>
                )}
              </AppContext.Consumer>
            </div>
          </div>
        </StyledDropDown>
      )}
    </Mutation>
  );
};
export default withRouter(ProfileDropDown);
