import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const AddItem = (props) => {
  const [input, setInput] = useState({
    text: '',
    date: '',
  });
  const HandleClick = (event) => {
    event.preventDefault();
    async function f() {
      axios.post('https://todolist-backend-560u.onrender.com/items', input);
      props.fetch();
    }
    f();
    setInput({ text: '', date: '' });
  };

  function HandleChange(event) {
    const { name, value } = event.target;
    setInput((prvValue) => {
      return { ...prvValue, [name]: value };
    });
  }

  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          name="text"
          className="form-control w-50 p-2"
          value={input.text}
          placeholder="Add new task"
          onChange={HandleChange}
        />
        <input
          type="date"
          name="date"
          className="form-control"
          value={input.date}
          title="Set task deadline"
          onChange={HandleChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary rounded-end-circle"
          title="Click to add new task"
          onClick={HandleClick}
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
};

export default AddItem;
