import React from "react";
import "./App.css";

import toDoList from "./todos";

import Item from './components/Item.component'

function App() {

  let items = toDoList
  return (
    <div className="App">
      <header className="App-header">
        <p>TO DO OR NOT TO DO</p>       
      </header>
      {items.map(item => 
      	<Item key={item.id} task={item.task} />      	
      	)}
    </div>
  );
}

export default App;
