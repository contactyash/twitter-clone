import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import styled from "styled-components";
import moment from "moment";
import Title from "./Title";
import Reactions from "./Reactions";
import Tweet from "./Tweet";
import StyledTweet from "../styles/StyledTweet";
import { dropDownIcon } from "../icons/svgIcons";
import { TWEET_REPLIES, TWEET_DETAILS_AND_REPLIES } from "../queries";
import BlankPage from "./BlankPage";

const StyledTweetDetails = styled(StyledTweet)`
  display: block;
  .aspect-ratio-outer {
    min-width: 50px;
  }
  .profile-info {
    display: flex;
    padding-bottom: 20px;
  }
  .name-username-time-moreBtn {
    width: 100%;
  }
  .name-username-time {
    display: flex;
    flex-direction: column;
    flex: 90%;
  }
  .tweet-text {
    color: black;
    font-size: 23px;
    padding-bottom: 20px;
  }
  .translate-tweet {
    color: dodgerblue;
    padding: 20px 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;

class TweetDetails extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const hasReplies = this.props.match.params.totalReplies;
    return (
      <>
        <Title withBack title="Tweet Details" />
        <Query query={TWEET_DETAILS_AND_REPLIES} variables={{ id }}>
          {({ data, error, loading }) => {
            if (loading) return <BlankPage h="40vh" />;
            if (error) return <BlankPage error h="40vh" />;
            const {
              createdAt,
              text,
              likeCounter,
              tweetedBy
            } = data.tweetDetailsAndReplies;

            if (data.tweetDetailsAndReplies.comments.length) {
              data.tweetDetailsAndReplies.totalReplies =
                data.tweetDetailsAndReplies.comments.length;
            } else {
              data.tweetDetailsAndReplies.totalReplies = 0;
            }
            const { name, email, profileImgUrl, id: whoTweeted } = tweetedBy;
            const time = moment(createdAt).format("hh:mm A . MMM DD, YYYY");
            const username = email.split("@")[0];
            const { totalReplies } = data.tweetDetailsAndReplies;
            return (
              <StyledTweetDetails>
                <div className="profile-info">
                  <div className="profile-img">
                    <div className="aspect-ratio-outer aspect-ratio-avatar">
                      <div className="aspect-ratio-inner">
                        {profileImgUrl && (
                          <img
                            className="img"
                            src={profileImgUrl}
                            alt="so that it don't show in warning"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="name-username-time-moreBtn">
                    <div className="name-username-time">
                      <Link
                        onClick={e => e.stopPropagation()}
                        to={`/profile-info/${whoTweeted}`}
                      >
                        <div className="name">{name}</div>
                      </Link>
                      <div className="username">@{username}</div>
                    </div>
                    <div className="moreBtn">{dropDownIcon}</div>
                  </div>
                </div>
                <div className="tweet-text">{text}</div>
                <div className="translate-tweet">Translate Tweet</div>
                <div className="time">{time} &middot; Twitter for Android</div>
                <Reactions
                  id={id}
                  totalReplies={totalReplies}
                  likeCounter={likeCounter}
                />
              </StyledTweetDetails>
            );
          }}
        </Query>
        {Boolean(Number(hasReplies)) && (
          <Query query={TWEET_REPLIES} variables={{ id }}>
            {({ data, error, loading }) => {
              if (loading) return <BlankPage h="40vh" />;
              const comments = data.tweetReplies.comments;
              return (
                <div className="replies">
                  {comments.map(commentData => {
                    if (commentData.comments) {
                      commentData.totalReplies = commentData.comments.length;
                    } else {
                      commentData.totalReplies = 0;
                    }
                    return <Tweet key={commentData.id} {...commentData} />;
                  })}
                </div>
              );
            }}
          </Query>
        )}
      </>
    );
  }
}

export default withRouter(TweetDetails);
