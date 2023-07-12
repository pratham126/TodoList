import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';
import axios from 'axios';
// import { globalState } from './State';
const HomeScreen = () => {
  // const { state, dispatch: ctxdispatch } = useContext(globalState);
  const [list, setList] = useState([]);
  useEffect(
    () => async () => {
      const { data } = await axios.get('/items');
      setList(data.items.sort((a, b) => new Date(b.date) - new Date(a.date)));
    },
    []
  );
  const fetchData = async () => {
    const { data } = await axios.get('/items');
    setList(data.items.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };
  return (
    <div className="box container-sm">
      <h1 id="heading" className="text-center my-3">
        My ToDo List
      </h1>
      <AddItem fun={fetchData} />
      <hr className="w-50 mx-auto" />
      <div>
        <ol className="list-group list-group-numbered list-group-flush">
          {list.length ? (
            list.map((listItem) => (
              <ListItem
                fun={fetchData}
                check={listItem.isChecked}
                key={listItem._id}
                item={listItem.name}
                id={listItem._id}
                date={listItem.date}
              />
            ))
          ) : (
            <p className='text-secondary'>No items in list</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default HomeScreen;
