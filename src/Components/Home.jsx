import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipe/recipes')  // Backend should run on port 5000
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2>Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe._id} className="mt-4 p-3 border">
            <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">
              <h3>{recipe.name}</h3>
            </Link>
            <img src={recipe.imageUrl} alt="Recipe" width="300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

