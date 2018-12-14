import React from "react";
import { Query } from "react-apollo";
import Title from "./Title";
import FollowThisPerson from "./FollowThisPerson";
import { TO_FOLLOW_QUERY } from "../queries";
import BlankPage from "./BlankPage";
class WhoToFollow extends React.Component {
  render() {
    return (
      <Query query={TO_FOLLOW_QUERY}>
        {({ data, error, loading }) => {
          if (loading)
            return (
              <>
                <Title title="Who to follow" />
                <BlankPage w="400px" />
              </>
            );
          if (error)
            return (
              <>
                <Title title="Who to follow" />
                <BlankPage error w="400px" />
              </>
            );
          return (
            <div>
              <Title
                withBack={window.innerWidth > 1000 ? false : true}
                title="Who to follow"
              />
              {data.toFollow.edges.map(nodeObj => {
                const { id, name, email, bio, profileImgUrl } = nodeObj.node;
                return (
                  <FollowThisPerson
                    default={false}
                    id={id}
                    name={name}
                    email={email}
                    bio={bio}
                    key={id}
                    profileImgUrl={profileImgUrl}
                  />
                );
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default WhoToFollow;
