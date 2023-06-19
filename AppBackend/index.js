require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(`${process.env.Database}`);
const ItemSchema = new mongoose.Schema({
  name: {
     type: String,
     required: [true, 'name field is required']
  },
  isChecked: Boolean,
  date: Date
});
const Item = mongoose.model('Item', ItemSchema);

const URL = process.env.PORT || 4000;

app.listen(URL, function(){
  console.log('Express is running on port', URL);
});

app.get("/",function(req,res){
  res.send("<h1>This is the root directory!</H1>");
  async function transact(){
    const allItems = await Item.find();
    res.send({message: allItems});
  }
  transact();
});

app.get('/items', function(req, res){
  async function transact(){
    const allItems = await Item.find();
    res.json({items: allItems});
  }
  transact();
});

app.post('/items', function(req, res){  
  async function transact(){
    const {text, date} = req.body;
    const newItem = new Item({
      name: text,
      isChecked: false,
      date: date
    });
    newItem.save().then(() => console.log('New Item added: ', newItem));
  }
  transact();
});

app.post('/delete/:id', function(req, res){  
  const itemId = req.params.id;
  async function transact(){
    await Item.deleteOne({_id: itemId});
  }
  transact();
});

app.post('/update/:id', function(req, res){  
  const itemId = req.params.id;
  async function transact(){
    const foundCheck = await Item.findOne({_id: itemId});
    await Item.updateOne({_id: itemId},{isChecked: !foundCheck.isChecked});
  }
  transact();
});

const dirname = path.resolve();
app.use(express.static(path.join(dirname, '/smart_todo/build')));
app.get("*", function(req, res){
  res.sendFile(path.join(dirname, '/smart_todo/build/index.html'))
})