import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import { ListItem } from '@mui/material';
import axios from 'axios';
const HomeScreen = () => {
  const [list, setList] = useState([]);
  useEffect(
    () => async () => {
      const { data } = await axios.get('http://localhost:4000/items');
      setList(data.items);
    },
    []
  );

  return (
    <div className="box">
      <h1 id="heading">My ToDo List</h1>
      <AddItem />
      <div>
        <ol style={{ padding: 20 }}>
          {list.map((listItem) => (
            <ListItem
              check={listItem.isChecked}
              key={listItem._id}
              item={listItem.name}
              id={listItem._id}
              date={listItem.date}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HomeScreen;
