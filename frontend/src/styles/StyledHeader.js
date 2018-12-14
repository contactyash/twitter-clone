import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: ${props => props.theme.secondary};
  border-bottom: 01px solid ${props => props.theme.lightGray};
  .header-container {
    max-width: 1000px;
    margin: 0 auto;
    .upper-header {
      max-width: 600px;
      min-height: 50px;
      margin: auto;
      display: flex;
      align-items: center;
    }
    .upper-header-middle {
      width: 480px;
      padding: 10px 20px;
      text-align: left;
      & h2 {
        font-size: 20px;
        margin: 0;
        margin-left: 10px;
        color: ${props => props.theme.blackColor};
      }
    }
    .fill {
      fill: ${props => props.theme.darkGray};
    }
    .nav {
      max-width: 600px;
      margin: 0px auto;
      display: flex;
      justify-content: center;
    }

    .nav-item {
      flex: 1;
      list-style: none;
      cursor: pointer;
    }
    .nav-item:hover svg {
      background-color: rgba(158, 239, 193, 0.5);
      border-radius: 50%;
      .fill {
        fill: ${props => props.theme.primary};
      }
    }
    .selected {
      border-bottom: 2px solid ${props => props.theme.primary};
    }
    .selected .fill {
      fill: ${props => props.theme.primary};
    }
    @media (min-width: 1000px) {
      display: flex;
      max-width: 1000px;
      .nav {
        width: 360px;
      }
      .upper-header {
        order: 2;
        flex: 1;
        width: 490px;
      }
      .upper-header-middle {
        order: 1;
        margin: 0;
        min-height: 33px;
        svg {
          height: 19px;
          width: 19px;
        }
        input {
          height: 33px;
          font-size: 18px;
        }
        input::placeholder {
          font-size: 16px;
        }
      }
    }
  }
`;
export default StyledHeader;
