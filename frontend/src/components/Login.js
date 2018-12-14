import React from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { birdIcon } from "../icons/svgIcons";
import Error from "./Error";
import StyledInput from "../styles/InputStyles";
import StyledButton from "../styles/ButtonStyle";
import { LOGIN_MUTATION } from "../mutations";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    redirect: false
  };
  handleInput = e =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  render() {
    const { email, password } = this.state;
    const from = (this.props.location.state &&
      this.props.location.state.from !== "/login" &&
      this.props.location.state.from) || { pathname: "/" };
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={data => {
          localStorage.setItem("me", JSON.stringify(data.login));
          this.setState({ redirect: true });
        }}
      >
        {(mutation, { error, loading }) =>
          this.state.redirect ? (
            <Redirect
              to={{
                pathname: from.pathname,
                state: this.props.location
              }}
            />
          ) : (
            <StyledLogin>
              <div className="bird-icon">{birdIcon}</div>
              <div className="login-text">Log In to Twitter</div>
              <div className="login-form">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    mutation();
                  }}
                >
                  <Error error={error} />
                  <StyledInput>
                    <input
                      value={email}
                      name="email"
                      placeholder="Your email adress"
                      onChange={this.handleInput}
                    />
                  </StyledInput>
                  <StyledInput>
                    <input
                      value={password}
                      name="password"
                      placeholder="Enter your password"
                      onChange={this.handleInput}
                    />
                  </StyledInput>
                  <StyledButton
                    heightL
                    primary
                    className={loading ? "active" : ""}
                  >
                    <button type="submit">Log In</button>
                  </StyledButton>
                </form>
              </div>
              <div className="forgot-password-signup">
                <Link to="/nowhere">Forget password ?</Link>
                &nbsp;&middot;&nbsp;
                <Link to="/signup">Signup for Twitter</Link>
              </div>
            </StyledLogin>
          )
        }
      </Mutation>
    );
  }
}

const StyledLogin = styled.div`
  padding: 0 10px;
  max-width: 400px;
  height: 100vh;
  margin: auto;
  background-color: white;
  .loginBtn {
    height: 100%;
  }
  .login-text {
    margin: 20px 0;
  }
  .forgot-password-signup {
    display: inline;
    color: dodgerblue;
  }
  .bird-icon {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export default withRouter(Login);
