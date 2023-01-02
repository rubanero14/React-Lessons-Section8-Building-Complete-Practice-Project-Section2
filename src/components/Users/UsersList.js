// import React to enable component to use JSX codes
import React from "react";
import Card from "../UI/Card";
import ListItem from "./ListItem";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.users}>
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user) => (
            <ListItem user={user} onDelete={props.onDelete} id={user.id} />
          ))}
        </ul>
      )}
      {props.users.length === 0 && (
        <Card>
          <p className={styles.notFound}>
            <strong>No Users found, add one?</strong>
          </p>
        </Card>
      )}
    </div>
  );
};

export default UsersList;
