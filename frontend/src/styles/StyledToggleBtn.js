import styled from "styled-components";
const StyledToggleBtn = styled.div`
  height: 15px;
  width: 40px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.3s all;
  background-color: ${props =>
    props.active ? "#42cbf4" : props.theme.darkGray};
  position: relative;
  .inner-div {
    height: 20px;
    width: 20px;
    position: absolute;
    transition: 0.3s all;
    top: -3px;
    left: ${props => (props.active ? "20px" : "-3px")};
    box-shadow: 0 1px 3px black;
    border-radius: 50%;
    background-color: ${props =>
      props.active ? props.theme.primary : props.theme.secondary};
    box-shadow: ${props => (props.active ? "0 1px 3px black" : null)};
  }
`;
export default StyledToggleBtn;
