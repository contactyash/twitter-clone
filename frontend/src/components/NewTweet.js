import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import Error from "./Error.js";
import Title from "./Title";
import AutoResizingTextarea from "./AutoResizingTextarea";
import ProgressCircle from "./ProgessCircle";
import StyledButton from "../styles/ButtonStyle";
import StyledNewTweet from "../styles/StyledNewTweet";
import yash from "../assets/defaultProfile.png";
import { addIcon, imageIcon, pollIcon, gifIcon } from "../icons/svgIcons";
import { NEW_TWEET_MUTATION, REPLY_TWEET_MUTATION } from "../mutations";
import { FEED_QUERY } from "../queries";

class NewTweet extends React.Component {
  state = {
    textarea: ""
  };
  handleInput = value => {
    this.setState({ textarea: value });
  };
  render() {
    let { textarea } = this.state;
    const params = this.props.match.params.id;
    const variables = { text: textarea };
    //we are reusing this component for new tweet page and reply tweet page
    // if we are replying we need to send that tweet id also
    //which we are adding
    //from params to variables
    if (params !== "newtweet") {
      variables.replyingToTweetId = params;
    }

    return (
      <Mutation
        mutation={
          params === "newtweet" ? NEW_TWEET_MUTATION : REPLY_TWEET_MUTATION
        }
        variables={variables}
        onCompleted={() => {
          if (params !== "newtweet") {
            this.props.history.replace(`/tweet-details/${params}/${1}`);
          } else this.props.history.replace("/");
        }}
        update={(cache, payload) => {
          const data = cache.readQuery({ query: FEED_QUERY });
          if (params !== "newtweet") {
            data.feed.edges.map(tweetNode => {
              if (tweetNode.node.id === params) {
                tweetNode.node.comments = payload.data.replyTweet.comments;
                return tweetNode;
              } else return tweetNode;
            });
          }
          cache.writeQuery({ query: FEED_QUERY, data });
        }}
      >
        {(mutation, { error, loading }) => (
          <>
            <Title
              withBack
              children={
                <StyledButton
                  primary={!loading && textarea && true}
                  notActive={!textarea && true}
                  marginB="0"
                >
                  <button onClick={mutation}>Tweet</button>
                </StyledButton>
              }
            />
            <Error error={error} />
            <StyledNewTweet>
              <div className="container">
                <div className="profile-icon">
                  <img src={yash} alt="something to write" />
                </div>
                <div className="tweet">
                  <AutoResizingTextarea handleInput={this.handleInput} />
                  <div className="addMedia-options">
                    <div className="add-imageGifPoll">
                      <div>{imageIcon}</div>
                      <div>{gifIcon}</div>
                      <div>{pollIcon}</div>
                    </div>
                    <div className="empty-middle-div" />
                    <div className="lengthBar-anotherTweet">
                      <div className="lengthBar">
                        <ProgressCircle
                          size="25"
                          progress={textarea.length}
                          circleColor={
                            textarea.length <= 120
                              ? "green"
                              : textarea.length > 120 && textarea.length < 140
                              ? "warning"
                              : textarea.length > 140
                              ? "danger"
                              : null
                          }
                        />
                      </div>
                      <div className="vl" />
                      <div
                        className={textarea ? "add-tweet active" : "add-tweet"}
                      >
                        {addIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StyledNewTweet>
          </>
        )}
      </Mutation>
    );
  }
}

export default withRouter(NewTweet);
