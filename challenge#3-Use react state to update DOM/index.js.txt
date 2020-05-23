import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  // MOST OF YOUR CODE GOES HERE
  const [name,setName] = useState("Chuloo");
  const [age,setAge] = useState("38");
  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input className="input"
           type="text"
           value={name}
            placeholder="William"
            onChange={e => setName(e.target.value)}
            />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input className="input"
           type="number"
           value={age}
            placeholder="38"
            onChange={e=> setAge(e.target.value)}
            />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
