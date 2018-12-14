import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Error from "./Error";
import InputStyles from "../styles/InputStyles";
import StyledButton from "../styles/ButtonStyle";
import Title from "./Title";
import { imageUploadIcon } from "../icons/svgIcons";
import StyledEditProfile from "../styles/StyledEditProfile";
import { UPDATE_USER_MUTATION } from "../mutations";
import defaultImage from "../assets/defaultProfile.png";

class EditProfile extends React.PureComponent {
  //I think its ok to populate props in state as initial value
  //and  if we don't need their updated value from parent later
  state = {
    name: this.props.me.name || "",
    bio: this.props.me.bio || "",
    location: this.props.me.location || "",
    website: this.props.me.website || "",
    coverImgUrl: this.props.me.coverImgUrl || "",
    profileImgUrl: this.props.me.profileImgUrl || "",
    cloudcoverImgUrl: "",
    cloudprofileImgUrl: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //saving to cloudinnary
  async saveImageToCloud(e) {
    const files = e.target.files;
    const name = e.target.name;
    const formData = new FormData();
    formData.append("file", files[0]);
    //cloudinary specific
    formData.append("upload_preset", `twitter-clone-${name}`);
    const res = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
      method: "POST",
      body: formData
    });

    if (res.status === 200) {
      const file = await res.json();
      //prefixing name with cloud ,which will be send to database
      const cloudUrl = `cloud${name}`;
      this.setState({ [cloudUrl]: file.secure_url });
      //to avoid requesting this url immdiately we are reading it locally for preview
      const reader = new FileReader();
      reader.onload = ev => {
        this.setState({ [name]: ev.target.result });
      };
      reader.readAsDataURL(files[0]);
    }
  }
  render() {
    const {
      name,
      bio,
      location,
      website,
      coverImgUrl,
      profileImgUrl,
      cloudcoverImgUrl,
      cloudprofileImgUrl
    } = this.state;
    const mutationVariables = {
      name,
      bio,
      location,
      website,
      coverImgUrl: cloudcoverImgUrl,
      profileImgUrl: cloudprofileImgUrl
    };
    return (
      <Mutation
        mutation={UPDATE_USER_MUTATION}
        variables={mutationVariables}
        onCompleted={data => {
          localStorage.setItem("me", JSON.stringify(data.updateUser));
          this.props.history.push("/");
        }}
      >
        {(mutation, { error, loading }) => (
          <>
            <Error error={error} />
            <Title
              title="Edit Profile"
              children={
                <StyledButton primary={loading ? false : true}>
                  <button onClick={() => mutation()}>Save</button>
                </StyledButton>
              }
            />
            <StyledEditProfile>
              <div className="aspect-ratio-outer">
                <div className="aspect-ratio-inner">
                  <div className="image-upload-icon">
                    <input
                      id="coverImgUpload"
                      className="inputfile"
                      name="coverImgUrl"
                      type="file"
                      onChange={e => this.saveImageToCloud(e)}
                    />
                    <label htmlFor="coverImgUpload">{imageUploadIcon}</label>
                  </div>
                  {coverImgUrl && (
                    <img
                      className="img cover-image"
                      src={coverImgUrl}
                      alt={`cover  of ${this.state.name}'s twitter profile`}
                    />
                  )}
                </div>
              </div>
              <div className="profile-image-div">
                <div className="aspect-ratio-outer aspect-ratio-profile-image">
                  <div className="aspect-ratio-inner">
                    <div className="image-upload-icon">
                      <input
                        id="profileImageUpload"
                        className="inputfile"
                        name="profileImgUrl"
                        type="file"
                        onChange={e => this.saveImageToCloud(e)}
                      />
                      <label htmlFor="profileImageUpload">
                        {imageUploadIcon}
                      </label>
                    </div>
                    {profileImgUrl && (
                      <img
                        className="img profile-image"
                        src={profileImgUrl}
                        alt={`profile  of${this.state.name}`}
                      />
                    )}
                  </div>
                </div>
                <div className="empty" />
              </div>
              <Input
                name="name"
                value={name}
                placeholder="Add your name"
                label="Name"
                maxLength="50"
                handleInput={this.handleInput}
              />
              <Input
                textarea
                name="bio"
                value={bio}
                placeholder="Add your bio"
                label="Bio"
                maxLength="160"
                handleInput={this.handleInput}
              />
              <Input
                name="location"
                value={location}
                placeholder="Add your location"
                label="Location"
                maxLength="30"
                handleInput={this.handleInput}
              />
              <Input
                name="website"
                value={website}
                placeholder="Add your website"
                label="Website"
                maxLength="100"
                handleInput={this.handleInput}
              />
            </StyledEditProfile>
          </>
        )}
      </Mutation>
    );
  }
}

//below we are creating a input/textarea component with sensible defaults
const StyledInput = styled.div`
  text-align: left;
  padding: 10px;
  ${props => (props.textarea ? "textarea" : "input")} {
    border-bottom: 1px solid #eeeeee;
  }
  ${props => (props.textarea ? "textarea" : "input")}:focus {
    border-bottom: 2px solid dodgerblue;
  }
  .input-length {
    text-align: right;
    font-weight: 100;
    font-size: 12px;
  }
`;
const Input = ({
  label,
  name,
  value,
  placeholder,
  handleInput,
  maxLength,
  ...rest
}) => (
  <StyledInput {...rest}>
    <label>{label}</label>
    <InputStyles
      {...rest}
      fsz="18px"
      bclr="none"
      bdr="0"
      padding="0"
      margin="0"
    >
      {rest.textarea ? (
        <textarea
          value={value}
          name={name}
          style={{ height: "50px" }}
          type="text"
          placeholder={placeholder}
          onChange={handleInput}
        />
      ) : (
        <input
          name={name}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={handleInput}
        />
      )}
    </InputStyles>
    <div className="input-length">
      {value.length}/{maxLength}
    </div>
  </StyledInput>
);

export default withRouter(EditProfile);
