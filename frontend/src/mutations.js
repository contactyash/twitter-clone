import gql from "graphql-tag";

export const FOLLOW_THIS_PERSON = gql`
  mutation FOLLOW_THIS_PERSON($whoToFollow: ID!) {
    follow(whoToFollow: $whoToFollow) {
      id
      name
      email
      bio
      location
      website
      coverImgUrl
      profileImgUrl
      followersCount
      followingCount
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
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
export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $name: String
    $bio: String
    $location: String
    $website: String
    $coverImgUrl: String
    $profileImgUrl: String
  ) {
    updateUser(
      data: {
        name: $name
        bio: $bio
        location: $location
        website: $website
        coverImgUrl: $coverImgUrl
        profileImgUrl: $profileImgUrl
      }
    ) {
      id
      name
      email
      bio
      location
      website
      coverImgUrl
      profileImgUrl
      followersCount
      followingCount
    }
  }
`;
export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout {
      successMessage
    }
  }
`;
export const NEW_TWEET_MUTATION = gql`
  mutation CREATE_TWEET_MUTATION($text: String!) {
    createTweet(text: $text) {
      text
    }
  }
`;
export const REPLY_TWEET_MUTATION = gql`
  mutation REPLY_TWEET_MUTATION($text: String!, $replyingToTweetId: ID!) {
    replyTweet(text: $text, replyingToTweetId: $replyingToTweetId) {
      comments {
        id
      }
    }
  }
`;
export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      bio
      location
      createdAt
      website
      coverImgUrl
      profileImgUrl
      followersCount
      followingCount
    }
  }
`;
export const LIKE_MUTATION = gql`
  mutation LIKE_MUTATION($tweetId: ID!) {
    likeTweet(tweetId: $tweetId) {
      successMessage
    }
  }
`;
