import React, { useState, useEffect } from "react";
import ListItem from "./components/ListItem.jsx";
import "./App.css";
import AddItem from "./components/AddItem.jsx";
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
      fetch("http://localhost:4000/items")
        .then((res) => res.json())
        .then((data) => setList(data.items))
  }, [list]);

  return (
    <div className="box">
      <h1 id='heading'>My ToDo List</h1>
        <AddItem />
        <div>
          <ol style={{padding: 20}}>
            {list.map((listItem) => <ListItem check={listItem.isChecked} key={listItem._id} item={listItem.name} id={listItem._id} date={listItem.date} />)}
          </ol>
        </div>
    </div>
  );
}

export default App
