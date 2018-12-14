import styled from "styled-components";

const StyledInput = styled.div`
  flex: 1;
  ${props => (props.textarea ? "textarea" : "input")} {
    outline-offset: -2px;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    color: ${props => props.theme.inputColor};
    font-size: ${props => (props.fsz ? props.fsz : "16px")};
    width: 100%;
    margin: ${props => (props.margin ? props.margin : "10px 0")};
    padding: ${props => (props.padding ? props.padding : "10px")};
    height: ${props => (props.height ? props.height : "37px")};
    border-radius: ${props => (props.bdr ? props.bdr : "24px")};
    border: none;
    outline: none;
    background-color: ${props =>
      props.bclr ? props.bclr : props.theme.inputBg};
  }
`;

export default StyledInput;
