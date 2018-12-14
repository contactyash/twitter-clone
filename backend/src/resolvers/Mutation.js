const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Mutation = {
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    args.password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args
      },
      info
    });
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return user;
  },
  //should name it updateProfile
  async updateUser(parent, args, ctx, info) {
    const userId = ctx.request.userId;
    if (!userId) {
      throw Error("not logged in");
    }
    const user = await ctx.db.mutation.updateUser(
      {
        data: { ...args.data },
        where: { id: userId }
      },
      `{
      id
      name
      email
      bio
      password
      location
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
    const followersCount = user.followers.length;
    const followingCount = user.following.length;
    return {
      ...user,
      followersCount,
      followingCount
    };
  },
  async login(parent, args, ctx, info) {
    const user = await ctx.db.query.user(
      { where: { email: args.email } },
      `{
      id
      name
      email
      bio
      password
      location
      website
      createdAt
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
    if (!user) {
      throw new Error("No such user found");
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    const followersCount = user.followers.length;
    const followingCount = user.following.length;
    return {
      ...user,
      followersCount,
      followingCount
    };
  },
  async logout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { successMessage: "Logged Out" };
  },
  async createTweet(_, args, ctx, info) {
    if (!ctx.request.userId) {
      throw Error("Login to tweet");
    }
    const tweet = await ctx.db.mutation.createTweet({
      data: {
        text: args.text,
        tweetedBy: {
          connect: {
            id: ctx.request.userId
          }
        }
      },
      info
    });
    return tweet;
  },
  async follow(parent, args, ctx, info) {
    const whoToFollow = args.whoToFollow;
    const userId = ctx.request.userId;
    if (!userId) {
      throw Error("must be logged in");
    }
    // check if already followed
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        following{id}
      }`
    );
    async function addOrRemove(whoToFollow, userId, connectOrDisconnect) {
      const user = await ctx.db.mutation
        .updateUser(
          {
            data: {
              following: {
                [connectOrDisconnect]: {
                  id: whoToFollow
                }
              }
            },
            where: { id: userId }
          },
          `{
          id
          name
          email
          bio
          password
          location
          website
         createdAt
          coverImgUrl
          profileImgUrl
          following {
            id
           }
          followers{
            id
          }
        }`
        )
        .catch(er => console.log(er));
      ctx.db.mutation
        .updateUser({
          data: {
            followers: {
              [connectOrDisconnect]: {
                id: userId
              }
            }
          },
          where: { id: whoToFollow }
        })
        .catch(er => console.log(er));
      const followersCount = user.followers.length;
      const followingCount = user.following.length;
      return {
        ...user,
        followersCount,
        followingCount
      };
    }
    const shouldBeRemoved = await user.following.some(
      el => el.id === args.whoToFollow
    );
    if (!shouldBeRemoved) {
      //add
      return addOrRemove(whoToFollow, userId, "connect");
    } else {
      //remove
      return addOrRemove(whoToFollow, userId, "disconnect");
    }
  },
  async replyTweet(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw Error("log in");
    }
    const tweet = await ctx.db.mutation.updateTweet(
      {
        data: {
          comments: {
            create: {
              text: args.text,
              tweetedBy: { connect: { id: ctx.request.userId } }
            }
          }
        },
        where: {
          id: args.replyingToTweetId
        }
      },
      info
    );
    return tweet;
  },
  async likeTweet(parent, args, ctx, info) {
    const tweet = await ctx.db.query.tweet(
      { where: { id: args.tweetId } },
      `{
          likeCounter
        }`
    );
    await ctx.db.mutation.updateTweet({
      data: { likeCounter: tweet.likeCounter + 1 },
      where: { id: args.tweetId }
    });
    return { successMessage: "liked" };
  }
};
module.exports = Mutation;
