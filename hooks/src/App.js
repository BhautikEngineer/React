import React from "react";
import Ustate from "./hooks/usestate";
import UEffect from "./hooks/useeffectex";
import Ucontext from "./hooks/context";
import Uref from "./hooks/ref";
import Todos from "./hooks/usereducer";
import UCallback from "./hooks/Callback";
import Umemo from "./hooks/Memo";


function App() {
  return (
    <div>

      <h1 align="center">Hooks</h1>
      <Ustate />
      <UEffect />
      <Ucontext />
      <Uref />
      <Todos />
      <UCallback />
      <Umemo />
    </div>
  );
}

export default App;
