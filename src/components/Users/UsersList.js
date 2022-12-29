// import React to enable component to use JSX codes
import React from "react";
import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user) => (
            <li key={user.userName + user.age}>
              {user.userName} ({user.age} y/o)
            </li>
          ))}
        </ul>
      )}
      {props.users.length === 0 && (
        <div className={styles.notFound}>No Users found!</div>
      )}
    </Card>
  );
};

export default UsersList;
