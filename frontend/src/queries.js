import gql from "graphql-tag";

export const QUERY_THIS_USER = gql`
  query THIS_USER_QUERY($id: ID) {
    thisUserQuery(id: $id) {
      id
      name
      email
      bio
      location
      website
      createdAt
      coverImgUrl
      profileImgUrl
      followersCount
      followingCount
    }
  }
`;

export const QUERY_THIS_USER_TWEETS = gql`
  query THIS_USER_TWEETS_QUERY($id: ID) {
    thisUserTweets(id: $id) {
      edges {
        node {
          id
          text
          createdAt
          likeCounter
          tweetedBy {
            id
            name
            email
            profileImgUrl
          }
          comments {
            id
          }
        }
      }
    }
  }
`;
export const TO_FOLLOW_QUERY = gql`
  query TO_FOLLOW_QUERY {
    toFollow {
      edges {
        node {
          id
          name
          email
          bio
          profileImgUrl
        }
      }
    }
  }
`;
export const FEED_QUERY = gql`
  query FEED_QUERY {
    feed {
      edges {
        node {
          id
          text
          likeCounter
          createdAt
          comments {
            id
          }
          tweetedBy {
            id
            name
            email
            profileImgUrl
          }
        }
      }
      pageInfo {
        startCursor
      }
    }
  }
`;
export const FOLLOWERS_QUERY = gql`
  query FOLLOWERS_QUERY {
    followers {
      followers {
        id
        name
        email
        bio
        profileImgUrl
      }
    }
  }
`;
export const FOLLOWING_QUERY = gql`
  query FOLLOWING_QUERY {
    following {
      following {
        id
        name
        email
        bio
        profileImgUrl
      }
    }
  }
`;
export const TWEET_DETAILS_AND_REPLIES = gql`
  query TWEET_DETAILS_AND_REPLIES($id: ID!) {
    tweetDetailsAndReplies(id: $id) {
      id
      text
      likeCounter
      tweetedBy {
        id
        name
        email
        profileImgUrl
      }
      createdAt
      comments {
        id
      }
    }
  }
`;
export const TWEET_REPLIES = gql`
  query TWEET_REPLIES($id: ID!) {
    tweetReplies(id: $id) {
      comments {
        id
        text
        createdAt
        likeCounter
        tweetedBy {
          id
          name
          email
          profileImgUrl
        }
        comments {
          id
        }
      }
    }
  }
`;
