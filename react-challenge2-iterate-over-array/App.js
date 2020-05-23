import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";
/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";


/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {
          users.map(
            (user, index) => (
              <div key={index}>
              <h3>{user.name}</h3>
              <p>{user.location}</p>
              <p>{user.car}</p>
              </div>
            )
          )
        }
      </div>
      <ScotchInfoBar />
    </div>
  );
}

export default App;
