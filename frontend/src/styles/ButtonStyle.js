import styled from "styled-components";

const StyledButton = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  max-width: 400px;
  height: ${props => (props.heightL ? "35px" : "28px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-bottom: ${props => (props.marginB ? props.marginB : "10px")};
  padding: 0 10px;
  border: 1px solid
    ${props =>
      props.primary || props.notActive
        ? props.theme.secondary
        : props.theme.primary};
  background-color: ${props =>
    props.primary
      ? props.theme.primary
      : props.notActive
      ? props.theme.primaryDisabled
      : props.theme.secondary};
  transition: all 0.2s;
  button {
    width: 100%;
    min-height: 100%;
    padding: 0;
    cursor: pointer;
    color: ${props =>
      props.primary || props.notActive
        ? props.theme.secondary
        : props.theme.primary};
    border: none;
    outline: none;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;

    background-color: transparent;
  }
  &:hover {
    background-color: ${props =>
      props.primary ? props.theme.primaryHover : props.theme.secondaryHover};
  }
  &.active {
    background-color: ${props =>
      props.primary ? props.theme.primaryActive : props.theme.secondaryActive};
    border: 2px solid ${props => props.theme.primary};
  }
`;
export default StyledButton;
