import React from "react";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import StyledTweet from "../styles/StyledTweet";
import Reactions from "./Reactions";
import { dropDownIcon } from "../icons/svgIcons";
import defaultImage from "../assets/defaultProfile.png";
//updating moments defaults
moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "10s",
    ss: "%d",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1 mon",
    MM: "%d mon",
    y: "a year",
    yy: "%dyear"
  }
});
const Tweet = ({
  createdAt,
  id,
  text,
  likeCounter,
  tweetedBy,
  totalReplies,
  ...restProps
}) => {
  const {
    name = "anonymous",
    email = "anonymous@gmail.com",
    profileImgUrl = defaultImage,
    id: whoTweeted = "anonymous"
  } = tweetedBy || {};
  const username = email.split("@")[0];
  const relativeTimeDiff = moment(createdAt).fromNow();

  return (
    <>
      <StyledTweet
        onClick={() =>
          restProps.history.push(`/tweet-details/${id}/${totalReplies}`)
        }
      >
        <div className="profile-img">
          <div className="aspect-ratio-outer aspect-ratio-avatar">
            <div className="aspect-ratio-inner">
              {profileImgUrl && (
                <img className="img" src={profileImgUrl} alt="profile" />
              )}
            </div>
          </div>
        </div>
        <div className="tweet">
          <div className="name-username-time-moreBtn">
            <div className="name-username-time">
              <Link
                onClick={e => e.stopPropagation()}
                to={`/profile-info/${whoTweeted}`}
              >
                <div className="name">{name}</div>
              </Link>
              <div className="username"> &nbsp;@{username}&nbsp;</div>
              <div className="time">
                {"\u00b7"} {relativeTimeDiff}
              </div>
            </div>
            <div className="moreBtn">{dropDownIcon}</div>
          </div>
          <div className="tweet-text">{text}</div>
          <Reactions
            id={id}
            totalReplies={totalReplies}
            likeCounter={likeCounter}
          />
        </div>
      </StyledTweet>
    </>
  );
};

export default withRouter(Tweet);
