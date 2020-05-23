import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [phrase, setPhrase] = useState("");
  const [age, setAge] = useState("35");

  if (phrase === "open sesame") {
    alert("You may pass!");
  }
  if (age === "16") {
    alert("Add greater age!");
  }
  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
        placeholder="Super duper secret"
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
      <h2>What's the secret phrase?</h2>
      <input
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="25"
      />
      <p>
        Hint: It's <strong>16</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
