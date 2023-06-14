const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/recipesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const recipeRouter = require('./routes/recipes');

app.use('/recipes', recipeRouter);


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
