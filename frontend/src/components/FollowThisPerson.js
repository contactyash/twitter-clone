import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import ButtonStyle from "../styles/ButtonStyle";
import Error from "./Error";
import { FOLLOW_THIS_PERSON } from "../mutations";
import StyledFollowThisPerson from "../styles/StyledFollowThisPerson";

class FollowThisPerson extends React.Component {
  state = {
    followed: this.props.default
  };
  render() {
    const { id, name, email, bio, profileImgUrl } = this.props;
    const { followed } = this.state;
    return (
      <Mutation
        mutation={FOLLOW_THIS_PERSON}
        variables={{ whoToFollow: id }}
        onCompleted={data => {
          localStorage.setItem("me", JSON.stringify(data.follow));
        }}
      >
        {(mutation, { error }) => {
          if (error) return <Error error={error} />;
          return (
            <StyledFollowThisPerson>
              <div className="aspect-ratio-outer aspect-ratio-avatar">
                <div className="aspect-ratio-inner">
                  {profileImgUrl && (
                    <Link to={`/profile-info/${id}`}>
                      <img
                        className="img avatar"
                        src={profileImgUrl}
                        alt={`profile of ${name}`}
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className="profile-info">
                <div className="name-username-followBtn">
                  <div className="name-username">
                    <Link to={`/profile-info/${id}`}>
                      <div className="name">
                        <b>{name}</b>
                      </div>
                      <div className="username">@{email.split("@")[0]}</div>
                    </Link>
                  </div>
                  <div
                    className="followBtn"
                    onClick={() => {
                      //just change button from follow to following without getting any resp from server
                      //  ALSO I HAVE NO IDEA HOW TO DO THIS ON FOLLOWERS page SOME FOLLOWERS MAY BE
                      // FOLLOWING YOU BACK OTHERS MAY NOT ,SHOULD I PERFORM A REQUEST FOR EACH
                      // OR ......no idea
                      this.setState({ followed: !this.state.followed });
                      mutation();
                    }}
                  >
                    <ButtonStyle primary={followed ? true : false}>
                      <button type="button">
                        {followed ? "following" : "follow"}
                      </button>
                    </ButtonStyle>
                  </div>
                </div>
                <Link to={`/profile-info/${id}`}>
                  <div className="bio">
                    <span className="paragraph-span">
                      <p>{bio}</p>
                    </span>
                  </div>
                </Link>
              </div>
            </StyledFollowThisPerson>
          );
        }}
      </Mutation>
    );
  }
}

export default FollowThisPerson;
