import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddItem = () => {
    const url = "http://localhost:4000/items";
    const [input, setInput] = useState({
      text: '',
      date: ''
    });
    function HandleClick(event) {
        event.preventDefault();
        fetch(url,{
            method: "POST",
            mode: 'cors',
            headers: {"Content-Type": "application/json"},      
            body: JSON.stringify({text: input.text, date: input.date})
        }).then(()=> console.log('fetch executed'));
        setInput({ text: '', date: ''});
    }
    
    function HandleChange(event){
      const {name, value} = event.target;
      setInput((prvValue) => {
        return {...prvValue, [name]: value}
      });
    }

    return (
    <form className='item' style={{display: 'flex'}} method = 'post'>
        <div>
          <input type="text" name='text' value={input.text} placeholder="Add new task" onChange={HandleChange} />
        <input type="date" name='date' value={input.date} title="Set task deadline" onChange={HandleChange}/>
        </div>
        <button type="submit" className="" title='Click to add new task' onClick={HandleClick}><AddIcon/></button>    
    </form>
  )
}

export default AddItem