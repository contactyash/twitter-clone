import styled from "styled-components";

const StyledReactions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 425px;
  margin-top: 10px;

  & div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  svg {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    .fill {
      fill: gray;
    }
  }
  svg:hover {
    background-color: ${props => props.theme.iconBgOnHover};
  }
  .liked {
    svg {
      .fill {
        fill: ${props => props.theme.loveColor};
      }
    }
  }
  .likes.active {
    color: ${props => props.theme.loveColor};
  }
`;
export default StyledReactions;
