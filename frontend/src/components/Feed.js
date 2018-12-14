import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Query } from "react-apollo";
import Tweet from "./Tweet";
import BlankPage from "./BlankPage";
import { FEED_QUERY } from "../queries";
import StyledButton from "../styles/ButtonStyle";
//we can use react-windows for rendering a huge list,but we are doing manually here
class Feed extends React.Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ data, error, loading, fetchMore }) => {
          //returning a blank white page of avoid janky effects
          //also to avoid code run further before data obj promise resolve
          if (loading) return <BlankPage h="90vh" />;
          if (error) return <BlankPage error h="90vh" />;
          //we are requesting each replies id also,to calculate no. of replies
          //so add totalReplies property to tweet obj
          data.feed.edges.map(tweetNode => {
            if (tweetNode.node.comments.length) {
              tweetNode.node.totalReplies = tweetNode.node.comments.length;
              return tweetNode.node;
            } else {
              tweetNode.node.totalReplies = 0;
              return tweetNode.node;
            }
          });
          return (
            <div>
              {data.feed.edges.length ? (
                data.feed.edges.map(tweetData => (
                  <Tweet key={tweetData.node.id} {...tweetData.node} />
                ))
              ) : (
                <BlankPage v="90vh">
                  <StyledButton primary>
                    <Link to="/edit-profile">
                      <button>Edit Your Profile</button>
                    </Link>
                  </StyledButton>
                  <StyledButton primary>
                    <Link to="/who-to-follow">
                      <button>Follow Someone</button>
                    </Link>
                  </StyledButton>
                  <div>
                    <p>and then refresh page to see your feed</p>
                  </div>
                </BlankPage>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default withRouter(Feed);
