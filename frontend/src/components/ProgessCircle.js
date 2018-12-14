import React from "react";
import StyledProgressCircle from "../styles/StyledProgressCircle";
//a progress circle based on svg
const ProgressCircle = props => {
  const { size, progress } = props;
  const r = (size / 2) * 0.9;
  const c = 2 * Math.PI * r;
  return (
    <StyledProgressCircle
      {...props}
      data-progress={progress > 120 ? 140 - progress : null}
    >
      <svg
        height={size}
        width={size}
        id="svg"
        viewport="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="inner-circle"
          r={(size / 2) * 0.9}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeDasharray={c}
          strokeDashoffset="0"
        />
        <circle
          id="bar"
          r={(size / 2) * 0.9}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeDasharray={c}
          strokeDashoffset={c - ((progress < 140 ? progress : 140) * c) / 140}
        />
      </svg>
    </StyledProgressCircle>
  );
};
export default ProgressCircle;
