import React from "react";
import { Query } from "react-apollo";
import Title from "./Title";
import FollowThisPerson from "./FollowThisPerson";
import BlankPage from "./BlankPage";
import { FOLLOWERS_QUERY } from "../queries";

class Followers extends React.Component {
  render() {
    return (
      <Query query={FOLLOWERS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <BlankPage />;
          if (error) return <BlankPage error />;
          const followers = data.followers;
          return (
            <div>
              <Title withBack text="Who to follow" />
              {!!followers.length ? (
                followers.followers.map(user => {
                  const { id, name, email, bio, profileImgUrl } = user;
                  return (
                    <FollowThisPerson
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
                <div>No followers</div>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Followers;
