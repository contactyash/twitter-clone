import React from "react";
import { Link } from "react-router-dom";
import { birdIcon } from "../icons/svgIcons";
import { peoplesIcon } from "../icons/svgIcons";
import { searchIcon } from "../icons/svgIcons";
import { conversationIcon } from "../icons/svgIcons";
import StyledButton from "../styles/ButtonStyle";
import StyledLandingPage from "../styles/StyledLandingPage";

const LandingPage = props => (
  <StyledLandingPage>
    <div className="upper-div">
      <div className="bird-icon">{birdIcon}</div>
      <div className="hero-text">
        See what's happening in the world right now
      </div>
      <div className="join-twitter">Join Twitter today</div>
      <Link to="/signup">
        <StyledButton heightL primary>
          <button type="submit">Sign up</button>
        </StyledButton>
      </Link>
      <Link to="/login">
        <StyledButton heightL>
          <button type="submit">Log In</button>
        </StyledButton>
      </Link>
    </div>
    <div className="background-image">
      <div className="middle-div">
        <div>
          <div>{searchIcon}</div>
          <div>Follow you interests</div>
        </div>
        <div>
          <div>{peoplesIcon}</div>
          <div>Hear what peoples are talking about</div>
        </div>
        <div>
          <div>{conversationIcon}</div>
          <div>Join the conversation</div>
        </div>
      </div>
    </div>
  </StyledLandingPage>
);
export default LandingPage;
