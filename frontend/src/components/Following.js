import React from "react";
import { Query } from "react-apollo";
import Title from "./Title";
import FollowThisPerson from "./FollowThisPerson";
import BlankPage from "./BlankPage";
import { FOLLOWING_QUERY } from "../queries";

class Following extends React.Component {
  render() {
    return (
      <Query query={FOLLOWING_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <BlankPage />;
          if (error) return <BlankPage error />;
          const following = data.following;
          return (
            <div>
              <Title withBack title="Following" />
              {!!following.following ? (
                following.following.map(user => {
                  const { id, name, email, bio, profileImgUrl } = user;
                  return (
                    <FollowThisPerson
                      default={true}
                      id={id}
                      name={name}
                      email={email}
                      bio={bio}
                      key={id}
                      profileImgUrl={profileImgUrl}
                    />
                  );
                })
              ) : (
                <div>you are not following anyone</div>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Following;
