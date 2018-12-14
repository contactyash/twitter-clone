import React from "react";
import { Route, Redirect } from "react-router-dom";
class PrivateRoute extends React.Component {
  state = {
    me: {}
  };
  componentDidMount() {
    const me = JSON.parse(localStorage.getItem("me"));
    this.setState({ me });
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          return this.state.me ? (
            <Component me={this.state.me} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }}
      />
    );
  }
}
export default PrivateRoute;
