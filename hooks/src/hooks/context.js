import React from 'react'
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user] = useState("Bhautik Kapadiya");

  return (
    <UserContext.Provider value={user}>
      <h4>{`Hello ${user}!`}</h4>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h4>Component 2</h4>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h4>Component 3</h4>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h4>Component 5</h4>
      <h3 style={{color: "blue"}}>{`Hello ${user} again!`}</h3>
    </>
  );
}


const Ucontext = () => {
  return (
    <div>
        <h2>UseContext</h2>
        <Component1 />
    </div>
  )
}

export default Ucontext