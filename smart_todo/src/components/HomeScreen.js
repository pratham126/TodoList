import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';
import axios from 'axios';
const HomeScreen = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const addData = async () => {
      const { data } = await axios.get(
        'https://todolist-backend-560u.onrender.com/items'
      );
      setList(data.items.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };
    addData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get(
      'https://todolist-backend-560u.onrender.com/items'
    );
    setList(data.items.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };
  return (
    <div className="box container-sm">
      <h1 id="heading" className="text-center my-3">
        My ToDo List
      </h1>
      <AddItem fetch={fetchData} />
      <hr className="w-50 mx-auto" />
      <div>
        <ol className="list-group list-group-numbered list-group-flush">
          {list.length ? (
            list.map((listItem) => (
              <ListItem
                fetch={fetchData}
                check={listItem.isChecked}
                key={listItem._id}
                item={listItem.name}
                id={listItem._id}
                date={listItem.date}
              />
            ))
          ) : (
            <p className="text-secondary">No items in list</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default HomeScreen;
