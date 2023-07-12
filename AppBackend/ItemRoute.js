import express from 'express';
import Item from './ItemSchema.js';

const ItemRoute = express.Router();

ItemRoute.get('/', async (req, res) => {
  const allItems = await Item.find();
  res.send({ message: allItems });
});

ItemRoute.get('/items', async (req, res) => {
  const allItems = await Item.find();
  res.send({ items: allItems });
});

ItemRoute.post('/items', async (req, res) => {
  const { text, date } = req.body;
  const newItem = new Item({
    name: text,
    isChecked: false,
    date: date,
  });
  newItem.save();
});

ItemRoute.post('/delete/:id', async (req, res) => {
  const itemId = req.params.id;
  const x = await Item.deleteOne({ _id: itemId });
});

ItemRoute.post('/update/:id', async (req, res) => {
  const itemId = req.params.id;
  const foundCheck = await Item.findOne({ _id: itemId });
  await Item.updateOne({ _id: itemId }, { isChecked: !foundCheck.isChecked });
});

export default ItemRoute;
