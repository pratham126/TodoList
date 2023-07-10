import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name field is required'],
  },
  isChecked: Boolean,
  date: Date,
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
