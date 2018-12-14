import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import Title from "./Title";
import Tweet from "./Tweet";
import HorizontalScrollMenu from "./HorizontalScrollMenu";
import BlankPage from "./BlankPage";
import ButtonStyles from "../styles/ButtonStyle";
import StyledProfileInfo from "../styles/ProfileInfoStyles";
import { calenderIcon, locationIcon, linkIcon } from "../icons/svgIcons";
import { QUERY_THIS_USER, QUERY_THIS_USER_TWEETS } from "../queries";
//TODO: show username in url instead of id

// check if querying other user or self
const CurrentUserInfo = props => {
  const currentUserId = props.me.id;
  const id = props.match.params.id;
  if (id && currentUserId === id) {
    return <UserInfo data={props.me} />;
  } else {
    return (
      <Query query={QUERY_THIS_USER} variables={{ id }}>
        {({ data, error, loading }) => {
          if (error) return <BlankPage h="90vh" />;
          return (
            <UserInfo loading={loading} otherUser data={data.thisUserQuery} />
          );
        }}
      </Query>
    );
  }
};

class UserInfo extends React.Component {
  state = {
    activeMenu: "Tweets"
  };
  render() {
    if (this.props.loading)
      return (
        <>
          <Title withBack title="User Profile" />
          <BlankPage h="90vh" />
        </>
      );
    const {
      id,
      name,
      email,
      bio,
      location,
      website,
      createdAt,
      coverImgUrl,
      profileImgUrl,
      followersCount,
      followingCount
    } = this.props.data;
    const joined = moment(createdAt).format("DD MMM YYYY");
    const username = email.split("@")[0];
    return (
      <>
        <Title withBack title={name} />
        <StyledProfileInfo>
          <div className="aspect-ratio-outer">
            <div className="aspect-ratio-inner">
              {coverImgUrl && (
                <img
                  className="img cover-img"
                  src={coverImgUrl}
                  alt={`cover of ${name}`}
                />
              )}
            </div>
          </div>
          <div className="profile-info">
            <div className="avatar-editBtn-div">
              <div className="avatar-div">
                <div className="aspect-ratio-outer aspect-ratio-avatar">
                  <div className="aspect-ratio-inner">
                    {profileImgUrl && (
                      <img
                        className="img avatar"
                        src={profileImgUrl}
                        alt={`avatar of ${name}`}
                      />
                    )}
                  </div>
                </div>
              </div>
              {this.props.otherUser ? null : (
                <Link to="/edit-profile">
                  <ButtonStyles>
                    <button>Edit Profile</button>
                  </ButtonStyles>
                </Link>
              )}
            </div>
            <div className="name-username">
              <div className="name">
                <span>{name}</span>
              </div>
              <div className="username">@{username}</div>
            </div>
            {bio && (
              <div className="bio">
                <span className="paragraph-span">{bio}</span>
              </div>
            )}
            <div className="joined-location-website">
              {location && (
                <div className="location">
                  {locationIcon}
                  <span>&nbsp;{location}</span>
                </div>
              )}
              <div className="joined">
                {calenderIcon}
                <span>&nbsp;Joined&nbsp;{joined}</span>
              </div>
              {website && (
                <div className="website">
                  {linkIcon}
                  <span>
                    <a href={website}>&nbsp;{website}</a>
                  </span>
                </div>
              )}
            </div>
            <div className="social-stats">
              <div className="followers-count">
                <b>{followersCount}</b> <small>Followers</small>
              </div>
              <div className="following-count">
                <b>{followingCount}</b> <small>Following</small>
              </div>
            </div>
          </div>
          <HorizontalScrollMenu>
            <ul className="nav-list">
              {["Tweets", "Tweets & Replies", "Media", "Likes"].map(navItem => (
                <li
                  key={navItem}
                  onClick={() => this.setState({ activeMenu: navItem })}
                  className={
                    this.state.activeMenu === navItem
                      ? "list-item active"
                      : "list-item"
                  }
                >
                  {navItem}
                </li>
              ))}
            </ul>
          </HorizontalScrollMenu>
          {this.state.activeMenu === "Tweets" && (
            <Query query={QUERY_THIS_USER_TWEETS} variables={{ id }}>
              {({ data, error, loading }) => {
                if (loading) return <BlankPage h="40vh" />;
                return (
                  <div className="replies">
                    {data.thisUserTweets.edges.map(tweetNode => {
                      if (tweetNode.node.comments) {
                        tweetNode.node.totalReplies =
                          tweetNode.node.comments.length;
                      } else {
                        tweetNode.node.totalReplies = 0;
                      }
                      return (
                        <Tweet key={tweetNode.node.id} {...tweetNode.node} />
                      );
                    })}
                  </div>
                );
              }}
            </Query>
          )}
        </StyledProfileInfo>
      </>
    );
  }
}

//Horzontal menu with prev and next button

//styles for horizontal menu

export default CurrentUserInfo;
