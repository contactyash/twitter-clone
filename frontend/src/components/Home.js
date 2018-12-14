import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import Feed from "./Feed";
import WhoToFollow from "./WhoToFollow";
import InputStyles from "../styles/InputStyles";
import StyledHome from "../styles/StyledHome";
import defaultImage from "../assets/defaultProfile.png";
import { newTweetIcon, imageIcon, gifIcon, pollIcon } from "../icons/svgIcons";

const Home = props => (
  <StyledHome className="home">
    <Header me={props.me} />
    <div className="home-feed">
      <div className="feed">
        <div className="new-tweet">
          <img
            src={
              props.me && props.me.profileImgUrl
                ? props.me.profileImgUrl
                : defaultImage
            }
            alt={props.me.name}
          />
          <InputStyles>
            <div>
              <input
                type="text"
                placeholder="what's happening?"
                onFocus={() => props.history.push("/newtweet/newtweet")}
              />
            </div>
          </InputStyles>
          <div className="other-option">
            {imageIcon}
            {gifIcon}
            {pollIcon}
          </div>
        </div>
        <Feed />
      </div>
      <div className="whoToFollow">
        <WhoToFollow />
      </div>
    </div>

    <Link to="/newtweet/newtweet">
      <div className="tweet-now-icon">{newTweetIcon}</div>
    </Link>
  </StyledHome>
);
export default withRouter(Home);
