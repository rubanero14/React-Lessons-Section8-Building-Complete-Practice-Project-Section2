import React, { useState } from "react";
import "./index.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (userName, userAge) => {
    // for states requiring older state with new state merged, we need to use arrow fn within set fn and pass the arg as prevState and return a new array of data inclusive,
    // spreaded prevStat using spread operator and add in newState in an array or object, this will remove any side effect and best practice
    let newId = usersData.length + 1; // adding id data for value for key attribute's value in list rendered later
    setUsersData((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: newId,
          userName: userName,
          age: userAge,
        },
      ];
    });
  };

  /* 
    1. The React built-in wrapper <> and </> below is called Fragment element, which used to wrap React components, is also another workaround to which wont render in DOM and a 
    solution to avoid multiple divs to be rendered in DOM (Div Soup problem - endless nested divs due to many components has wrapper divs renders in DOM)
    2. We also can use other built in React Fragment wrappers, such as <React.Fragments></React.Fragments> by importing React into the component 
    3. We also can futher simplify by using another built-in React wrapper by importing React and {Fragment} together and use <Fragment></Fragment> as a wrapper
  */
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </>
  );
}

export default App;
