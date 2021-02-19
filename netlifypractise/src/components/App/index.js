import React, { useState } from "react";
import Pokemon from "../Pokemon";

function App() {
  const [number, setNumber] = useState();

  function handleClick() {
    let indexNo = Math.floor(Math.random() * 20 + 1);
    setNumber(indexNo);
  }
  console.log(number);

  return (
    <div>
      <button onClick={handleClick}>Get a new Pokemon</button>
      <Pokemon indexNoProp={number} />
    </div>
  );
}

export default App;
