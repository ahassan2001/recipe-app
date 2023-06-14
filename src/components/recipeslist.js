import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then(res => {
        setRecipes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSaveFavorite = (recipe) => {
    axios.post('/recipes/add', recipe)
      .then(res => {
        console.log(res.data);
        // Optionally, update state or show a success message
      })
      .catch(err => {
        console.log(err);
        // Optionally, show an error message
      });
  };

  return (
    <div>
      <h2>Recipes List</h2>
      {recipes.map(recipe => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          <p>Instructions: {recipe.instructions}</p>
          <button onClick={() => handleSaveFavorite(recipe)}>Save as Favorite</button>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
