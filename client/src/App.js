import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import RecipesList from './components/RecipesList';
import AddRecipe from './components/AddRecipe';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={RecipesList} />
        <Route path="/add" component={AddRecipe} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
