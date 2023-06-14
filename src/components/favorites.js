import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then(res => {
        setFavorites(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleRemoveFavorite = (recipeId) => {
    axios.delete(`/recipes/${recipeId}`)
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
      <h2>Favorites</h2>
      {favorites.map(favorite => (
        <div key={favorite._id}>
          <h3>{favorite.title}</h3>
          <p>Ingredients: {favorite.ingredients.join(', ')}</p>
          <p>Instructions: {favorite.instructions}</p>
          <button onClick={() => handleRemoveFavorite(favorite._id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
