import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <React.Fragment>
      {props.buttonType === "button" && (
        <button
          className={styles.button}
          type={props.type || "button"}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
      {props.buttonType === "link" && (
        <a
          className={styles.button}
          target="_blank"
          href={props.link}
          rel="noreferrer"
        >
          {props.children}
        </a>
      )}
    </React.Fragment>
  );
};

export default Button;
