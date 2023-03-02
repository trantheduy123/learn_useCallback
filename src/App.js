import React, { useCallback, useState } from "react";
import Childcomponent from "./component/Childcomponent";

function App() {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data :</p>
      <button onClick={handleClick}>Get user data</button>
      <p>{JSON.stringify(users)}</p>
      <Childcomponent getData={getData} />
    </>
  );
}

export default App;
