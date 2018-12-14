import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import Error from "./Error";
import StyledButton from "../styles/ButtonStyle";
import StyledInput from "../styles/InputStyles";
import { birdIcon } from "../icons/svgIcons";
import { SIGNUP_MUTATION } from "../mutations";

const StyledSignUp = styled.div`
  padding: 0 10px;
  max-width: 400px;
  height: 100vh;
  margin: auto;
  background-color: white;
  .bird-icon {
    svg {
      width: 40px;
      height: 40px;
    }
    .login-text {
      margin: 20px 0;
    }
  }
`;

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{ email, password, name }}
        onCompleted={data => {
          localStorage.setItem("me", JSON.stringify(data.signup));
          this.props.history.push("/");
        }}
      >
        {(mutation, { error, loading }) => (
          <>
            <Error error={error} />
            <StyledSignUp>
              <div className="bird-icon">{birdIcon}</div>
              <div className="login-text">Sign Up</div>
              <div className="login-form">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    mutation();
                  }}
                >
                  <StyledInput>
                    <input
                      value={name}
                      name="name"
                      placeholder="Your name"
                      onChange={this.handleInput}
                    />
                  </StyledInput>

                  <StyledInput>
                    <input
                      value={email}
                      name="email"
                      type="email"
                      placeholder="Your email adress"
                      onChange={this.handleInput}
                    />
                  </StyledInput>
                  <StyledInput>
                    <input
                      value={password}
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={this.handleInput}
                    />
                  </StyledInput>
                  <StyledButton heightL>
                    <button type="submit">Sign Up</button>
                  </StyledButton>
                </form>
              </div>
            </StyledSignUp>
          </>
        )}
      </Mutation>
    );
  }
}

export default withRouter(SignUp);
