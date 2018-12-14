import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import StyledReactions from "../styles/StyledReactions";
import {
  replyIcon,
  retweetIcon,
  loveIcon,
  filledLovedIcon,
  bookIcon
} from "../icons/svgIcons";
import { LIKE_MUTATION } from "../mutations";
import { FEED_QUERY } from "../queries";
class Reactions extends React.Component {
  state = {
    liked: false
  };
  handleLike = (e, mutation) => {
    e.stopPropagation();
    this.setState(() => ({ liked: !this.state.liked }), () => mutation());
  };
  updateCache = (cache, payload, id) => {
    //like is just client side actually at server it only gets increased on each clicked
    const data = cache.readQuery({ query: FEED_QUERY });
    data.feed.edges.map(tweetNode =>
      tweetNode.node.id === id
        ? (tweetNode.node.likeCounter = this.state.liked
            ? tweetNode.node.likeCounter + 1
            : tweetNode.node.likeCounter - 1)
        : tweetNode.node
    );
    cache.writeQuery({ query: FEED_QUERY, data });
  };
  render() {
    const { id, totalReplies, likeCounter } = this.props;
    const optimisticResponse = {
      __typename: "Mutation",
      likeTweet: {
        __typename: "likeTweet",
        successMessage: "liked"
      }
    };
    return (
      <Mutation
        mutation={LIKE_MUTATION}
        variables={{ tweetId: id }}
        update={(cache, payload) => this.updateCache(cache, payload, id)}
        optimisticResponse={optimisticResponse}
      >
        {mutation => {
          return (
            <StyledReactions>
              <div>
                <div
                  onClick={e => {
                    e.stopPropagation();
                    this.props.history.push(`/newtweet/${id}`);
                  }}
                >
                  {replyIcon}
                </div>
                <div>
                  <span className="total-replies">
                    {!!totalReplies && totalReplies}
                  </span>
                </div>
              </div>

              <div onClick={e => e.stopPropagation()}>{retweetIcon}</div>
              <div>
                <div
                  className={this.state.liked ? "liked" : null}
                  onClick={e => this.handleLike(e, mutation)}
                >
                  {this.state.liked ? filledLovedIcon : loveIcon}
                </div>
                <div>
                  <span className={this.state.liked ? "likes active" : "likes"}>
                    {!!likeCounter && likeCounter}
                  </span>
                </div>
              </div>
              <div onClick={e => e.stopPropagation()}>{bookIcon}</div>
            </StyledReactions>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(Reactions);
