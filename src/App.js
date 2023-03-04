import React, { useCallback, useState } from "react";
import Child from "./component/Child";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p> Count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

function App({ ViewsCount }) {
  const [name, setName] = useState("Duy");

  const getUser = useCallback(() => {
    return fetch(`https://reqres.in/api/users`);
  }, []);

  /* 
  use call back
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
      });  */

  return (
    <>
      <Counter />
      <Child name={name} getUser={getUser} />
    </>
    /* use Callback
       <p>Data :</p>
      <button onClick={handleClick}>Get user data</button>
      <p>{JSON.stringify(users)}</p>
      <Childcomponent getData={getData} /> */
  );
}

export default App;
