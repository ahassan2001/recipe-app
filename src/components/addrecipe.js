import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      ingredients: ingredients.split(','),
      instructions
    };

    axios.post('/recipes/add', newRecipe)
      .then(res => {
        console.log(res.data);
        // Optionally, clear the form or show a success message
      })
      .catch(err => {
        console.log(err);
        // Optionally, show an error message
      });
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Ingredients (comma-separated):</label>
          <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} required />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} required />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
