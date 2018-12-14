import styled from "styled-components";
const StyledProgressCircle = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  position: relative;
  &:after {
    position: absolute;
    width: ${props => props.size * 0.8}px;
    height: ${props => props.size * 0.8}px;
    top: 20%;
    left: 10%;
    font-size: 10px;
    content: attr(data-progress);
  }
  svg {
    padding: 0;
  }
  .inner-circle {
    stroke-dashoffset: 0;
  }
  circle {
    /* transition: stroke-dashoffset 1s linear; */
    stroke: #eee;
    stroke-width: 2px;
  }
  #bar {
    stroke: ${props =>
      props.circleColor === "green"
        ? props.theme.primary
        : props.theme === "warning"
        ? "orange"
        : "red"};
  }
`;
export default StyledProgressCircle;
