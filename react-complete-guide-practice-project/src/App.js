import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersList";
import { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
