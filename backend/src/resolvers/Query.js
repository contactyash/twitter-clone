const { forwardTo } = require("prisma-binding");
// import gql from "graphql-tag";
const Query = {
  async feed(parent, args, ctx, info) {
    const tweets = await ctx.db.query.tweetsConnection(
      {
        where: { tweetedBy: { followers_some: { id: ctx.request.userId } } }
      },

      info
    );

    return tweets;
  },
  async thisUserTweets(parent, args, ctx, info) {
    const tweets = await ctx.db.query.tweetsConnection(
      {
        where: { tweetedBy: { id: args.id } }
      },
      info
    );
    return tweets;
  },
  async thisUserQuery(parent, args, ctx, info) {
    const otherUserId = args.id;
    const currentUserId = ctx.request.userId;
    if (!currentUserId) return null;
    if (otherUserId && currentUserId) {
      // const a = await ctx.db.query.user({ where: { id: args.id } });
      const otherUser = await ctx.db.query.user(
        { where: { id: otherUserId } },
        `{
        id
        name
        email
        bio
        location
       createdAt
       website
        coverImgUrl
        profileImgUrl
        following {
          id

        }
        followers{
          id
        }

      }`
      );
      const followersCount = otherUser.followers.length;
      const followingCount = otherUser.following.length;
      return {
        ...otherUser,
        followersCount,
        followingCount
      };
    } //remove this if
    else {
      const user = ctx.db.query.user({ where: { id: currentUserId } }, info);
      return user;
    }
  },
  async following(parent, args, ctx, info) {
    const following = await ctx.db.query.user(
      { where: { id: ctx.request.userId } },
      info
    );
    return following;
  },
  async followers(parent, args, ctx, info) {
    const followers = await ctx.db.query.user(
      { where: { id: ctx.request.userId } },
      info
    );
    return followers;
  },
  async toFollow(parent, args, ctx, info) {
    const toFollow = await ctx.db.query.usersConnection(
      {
        where: {
          AND: [
            { followers_none: { id: ctx.request.userId } },
            { id_not: ctx.request.userId }
          ]
        }
      },
      info
    );
    return toFollow;
  },
  async tweetReplies(parent, args, ctx, info) {
    const tweet = await ctx.db.query.tweet({ where: { id: args.id } }, info);
    return tweet;
  },
  async tweetDetailsAndReplies(parent, args, ctx, info) {
    const tweet = await ctx.db.query.tweet({ where: { id: args.id } }, info);

    return tweet;
  }
};
module.exports = Query;
