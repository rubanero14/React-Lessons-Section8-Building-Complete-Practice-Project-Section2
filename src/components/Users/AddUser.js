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
          <Button type={"submit"} buttonType={"button"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
            </svg>
            &nbsp; Add User
          </Button>
          &nbsp; &nbsp;
          <Button
            buttonType={"link"}
            link="https://github.com/rubanero14/React-Lessons-Section9-Building-Complete-Practice-Project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-filetype-jsx"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"
              ></path>
            </svg>
            &nbsp; Source Code
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
