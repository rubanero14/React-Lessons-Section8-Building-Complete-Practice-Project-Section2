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

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
