import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';
import axios from 'axios';
const HomeScreen = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log('fetching data now 1');
    const addData = async () => {
      console.log('fetching data now 2');
      const { data } = await axios.get(
        'https://todolist-backend-560u.onrender.com/items'
      );
      setList(data.items.sort((a, b) => new Date(b.date) - new Date(a.date)));
      console.log('fetched the data 1');
    };
    addData();
    console.log('fetched the data 2');
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
