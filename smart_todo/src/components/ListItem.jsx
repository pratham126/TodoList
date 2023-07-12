import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';
import axios from 'axios';
const ListItem = (props) => {
  const [check, setCheck] = useState(props.check);

  const DeleteItem = async () => {
    async function f() {
      await axios.post(
        'https://todolist-backend-560u.onrender.com/delete/' + props.id,
        {
          id: props.id,
        }
      );
    }
    f();
    props.fun();
    props.fun();
  };

  function CheckItem() {
    axios.post(
      'https://todolist-backend-560u.onrender.com/update/' + props.id,
      { id: props.id }
    );
    setCheck(!check);
    props.fun();
    props.fun();
  }

  function GiveDate() {
    const date = props.date;
    if (date) return date.substr(0, 10);
    return;
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div
        className="ms-2 me-auto"
        onClick={CheckItem}
        style={{ textDecoration: check ? 'line-through' : 'none' }}
        title="Click to mark the task completed"
      >
        {props.item}
      </div>
      <span className="ms-2 me-3" title="task deadline">
        {GiveDate()}
      </span>
      <span title="Delete task">
        <DeleteIcon
          onClick={() => {
            DeleteItem();
          }}
        />
      </span>
    </li>
  );
};

export default ListItem;
