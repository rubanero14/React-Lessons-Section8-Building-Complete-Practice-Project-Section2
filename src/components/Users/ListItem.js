import React from "react";
import Svg from "../UI/Svg";
import Card from "../UI/Card";

import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const deleteUserHandler = () => {
    props.onDelete(props.user.id);
  };

  return (
    <li id={props.user.id} key={props.user.id} onClick={deleteUserHandler}>
      <Card className={styles.listCard}>
        <p className={styles.list}>
          <strong>
            {props.user.userName} &nbsp;({props.user.age} years old!)
          </strong>
        </p>
        <Svg className={("bi bi-x-circle", styles.svg)}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
        </Svg>
      </Card>
    </li>
  );
};

export default ListItem;
