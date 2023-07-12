import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
// import { globalState } from './State';
import axios from 'axios';

const AddItem = (props) => {
  // const { dispatch: ctxdispatch } = useContext(globalState);
  // const list
  const [input, setInput] = useState({
    text: '',
    date: '',
  });
  const HandleClick = (event) => {
    event.preventDefault();
    // const { data } = fetch(url, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: input.text, date: input.date }),
    // }).then(() => console.log('fetch executed'));
    async function f() {
      axios.post('/items', input);
      props.fun();
      props.fun();
      // console.log('2nd addItem in AddItem');
      // console.log(props.fun());
      // console.log(props.fun);
    }
    f();
    // ctxdispatch({ type: 'ADD_ITEM', payload: data });
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
