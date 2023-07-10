import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ItemRoute from './ItemRoute.js';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000',
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

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/smart_todo/build')));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/smart_todo/build/index.html'))
);
