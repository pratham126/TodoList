import express from 'express';
import Item from './ItemSchema.js';

const ItemRoute = express.Router();

ItemRoute.get('/', function (req, res) {
  // res.send('<h1>This is the root directory!</h1>');
  async function transact() {
    const allItems = await Item.find();
    res.send({ message: allItems });
  }
  transact();
});

ItemRoute.get('/items', function (req, res) {
  async function transact() {
    const allItems = await Item.find();
    res.json({ items: allItems });
  }
  transact();
});

ItemRoute.post('/items', function (req, res) {
  async function transact() {
    const { text, date } = req.body;
    const newItem = new Item({
      name: text,
      isChecked: false,
      date: date,
    });
    newItem.save().then(() => console.log('New Item added: ', newItem));
  }
  transact();
});

ItemRoute.post('/delete/:id', function (req, res) {
  const itemId = req.params.id;
  async function transact() {
    await Item.deleteOne({ _id: itemId });
  }
  transact();
});

ItemRoute.post('/update/:id', function (req, res) {
  const itemId = req.params.id;
  async function transact() {
    const foundCheck = await Item.findOne({ _id: itemId });
    await Item.updateOne({ _id: itemId }, { isChecked: !foundCheck.isChecked });
  }
  transact();
});

export default ItemRoute;
