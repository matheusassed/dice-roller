import React from "react";
import "./App.css";
import Dice from './components/Dice/Dice';

function App (props) {
  return (
    <div className="App">
      <Dice tipoDado={"d6"} quantidadeDados={7}/>
      <h1>Dice Roll Demo</h1>
    </div>
  );
}

export default App;