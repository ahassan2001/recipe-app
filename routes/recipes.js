const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/', (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const newRecipe = new Recipe({ title, ingredients, instructions });

  newRecipe
    .save()
    .then(() => res.json('Recipe added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
