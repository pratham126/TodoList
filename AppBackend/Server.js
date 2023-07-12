import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ItemRoute from './ItemRoute.js';
import cors from 'cors';

const corsOptions = {
  origin: 'https://todolist-frontend-qz1n.onrender.com',
};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log('Connected to cloud db'))
  .catch((err) => console.log('error is', err));

app.use('/', ItemRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Serve at http://localhost:${PORT}`);
});
