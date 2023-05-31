import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';
const ListItem = (props) => {
  const [check, setCheck] = useState(props.check);
  
  function DeleteItem() {
    fetch('http://localhost:4000/delete/' + props.id,{
      method: "POST",
      mode: 'cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id: props.id})
    }).then(()=> console.log('Item delete fetch executed'));
  }

  function CheckItem() {
    fetch('http://localhost:4000/update/' + props.id,{
      method: "POST",
      mode: 'cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id: props.id})
    }).then(()=> console.log('Item Check fetch executed'));
    setCheck(!check);
  }

  function GiveDate(){
    const date = props.date; 
    if(date) 
      return date.substr(0, 10); 
    return;
  }
  return (
        <li className='item'>
          <div className='parentDiv'>
            <div className='ld'>
              <p onClick={CheckItem} style={{textDecoration: check ? 'line-through': 'none'}} title='Click to mark the task completed'>{props.item} </p>
              <h6 title='task deadline'>{GiveDate()}</h6>
            </div>
            <div className='icon'title='Delete task'><DeleteIcon  onClick={DeleteItem}/></div>
          </div>
        </li>
  )
}

export default ListItem;