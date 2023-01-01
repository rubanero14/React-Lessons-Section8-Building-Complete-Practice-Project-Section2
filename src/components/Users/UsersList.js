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
              <p className={styles.list}>
                <strong>
                  {user.userName} &nbsp;({user.age} years old!)
                </strong>
              </p>
            </li>
          ))}
        </ul>
      )}
      {props.users.length === 0 && (
        <p className={styles.notFound}>
          <strong>No Users found, add one?</strong>
        </p>
      )}
    </Card>
  );
};

export default UsersList;
