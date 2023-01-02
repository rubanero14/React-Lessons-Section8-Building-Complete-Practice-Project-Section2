import React from "react";

const Svg = (props) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={props.className}
        viewBox="0 0 16 16"
      >
        {props.children}
      </svg>
    </React.Fragment>
  );
};

export default Svg;
