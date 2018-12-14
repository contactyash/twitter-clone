//TODO: lazyload and suspense
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import GlobalStyle from "./styles/GlobalStyles";
import createClient from "./apolloClient";
import PrivateRoute from "./PrivateRoute";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Message from "./components/Message";
import Home from "./components/Home";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import NewTweet from "./components/NewTweet";
import EditProfile from "./components/EditProfile";
import CurrentUserInfo from "./components/ProfileInfo";
import WhoToFollow from "./components/WhoToFollow";
import Followers from "./components/Followers";
import Following from "./components/Following";
import TweetDetails from "./components/TweetDetails";
import NotFoundPage from "./components/NotFoundPage";

const client = createClient();
const theme = {
  loveColor: "red",
  primary: "#1DA1F2",
  primaryHover: "#1A91DA",
  primaryActive: "#1A91DA",
  secondary: "#fff",
  secondaryHover: "#8ED0F9",
  secondaryActive: "",
  disabledPrimary: "#8ED0F9",
  bg: "#e6ecf0",
  generalTextColor: "#657786",
  inputColor: "",
  inputBg: "#e6ecf0",
  darkGray: "#657786",
  lightGray: "#AAB8C2",
  extraLightGray: "#E1E8ED",
  extraExtraLightGray: "#F5F8FA",
  blackColor: "black",
  iconBgOnHover: "#E8F5FE"
};
const invertTheme = {
  loveColor: "red",
  primary: "#1DA1F2",
  primaryHover: "",
  primaryActive: "",
  secondary: "#15202B",
  secondaryHover: "#8ED0F9",
  secondaryActive: "",
  disabledPrimary: "#8ED0F9",
  bg: "#10171E",
  generalTextColor: "#54606B",
  inputColor: "",
  inputBg: "#10171E",
  darkGray: "#657786",
  lightGray: "#10171E",
  extraLightGray: "#10171E",
  extraExtraLightGray: "#10171E",
  blackColor: "white",
  iconBgOnHover: "#E8F5FE"
};

export const AppContext = React.createContext();

class App extends Component {
  state = {
    invertTheme: false
  };
  componentDidMount() {
    this.setState({
      invertTheme: JSON.parse(localStorage.getItem("nightMode"))
    });
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateState: partialState =>
            this.setState({ ...this.state, ...partialState })
        }}
      >
        <ThemeProvider theme={this.state.invertTheme ? invertTheme : theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <GlobalStyle />
              <Router>
                <Switch>
                  <Route path="/landing" component={LandingPage} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <PrivateRoute path="/" component={Home} exact />
                  <PrivateRoute path="/who-to-follow" component={WhoToFollow} />
                  <PrivateRoute path="/following" component={Following} />
                  <PrivateRoute path="/followers" component={Followers} />
                  <Route path="/newtweet/:id" component={NewTweet} />
                  <Route
                    path="/tweet-details/:id/:totalReplies"
                    component={TweetDetails}
                  />
                  <PrivateRoute
                    path="/profile-info/:id"
                    component={CurrentUserInfo}
                  />
                  <PrivateRoute path="/edit-profile" component={EditProfile} />
                  <PrivateRoute path="/search" component={Search} />
                  <PrivateRoute
                    path="/notifications"
                    component={Notifications}
                  />
                  <PrivateRoute path="/messages" component={Message} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Router>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
