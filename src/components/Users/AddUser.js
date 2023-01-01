import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState({
    title: "",
    message: "",
    error: false,
  });

  /*
    1. Controlled Components => using useState to handle DOM elements and its values and its internal states using Virtual DOM, purely using React
    2. Uncontrolled Components => using useRef to handle real DOM elements values and its internal states using native DOM elements, not using React, although useRef is part
       of React.
   */

  // onSubmit event handler =>
  const addUserHandler = (event) => {
    // Prevent page from refreshing upon submit evnt fired
    event.preventDefault();

    // Refs are a direct way getting info from real DOM than using useState and event listeners, and oes the same job getting info from real DOM with lesser codes
    // useRef returns an object name current with props such as value and etc
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Gatekeeping function to bar submitting empty data
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return setError({
        title: "Invalid input!",
        message: "Please fill up the inputs and dont leave them empty.",
        error: true,
      });
    }

    if (+enteredUserAge < 1) {
      return setError({
        title: "Invalid age!",
        message: "Please input valid age.",
        error: true,
      });
    }

    // Sending new user data using props function to parent component to update new list or array of users whenever add use button is clicked
    props.onAddUser(enteredName, enteredUserAge);

    // Garbage Collection - normally not best practice directly manipulate DOM, but in this case resetting input upon submit data is acceptable
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // Close modal
  const closeModal = () => {
    setError({
      title: "",
      message: "",
      error: false,
    });
  };

  /* 
    className can be renamed anything like classes or styles, and passed down into child Card component and access there using 
    props."whatever key name you set here on props", but im choosing className just to be semanctically correct
  */
  return (
    <Wrapper>
      {
        // This is how to render conditionally using JSX without need to use css display method
        /* 
          error.error && (
          <ErrorModal
            closeModal={closeModal}
            title={error.title}
            message={error.message}
          />)
      */
      }
      <ErrorModal
        showModal={error.error}
        closeModal={closeModal}
        title={error.title}
        message={error.message}
      />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit" style={{ marginBotttom: "10px" }}>
            Add User
          </Button>
          <p
            className={styles.alert}
            style={{ display: error.error ? "block" : "none" }}
          >
            {error.message}
          </p>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
