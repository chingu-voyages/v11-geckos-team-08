import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TO DO OR NOT TO DO</p>
      </header>

      <div className="mainPartOfThePage">
        <div className="leftPart">
          <ul>
            <li>
              <a href="#">Boards</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New Board</a>
            </li>
          </ul>
        </div>
        <ul className="rightList">
          <li className="rightPart">Your Boards</li>
        </ul>
      </div>

      <footer>Powered by Geckos Team 8</footer>
    </div>
  );
}

export default App;
