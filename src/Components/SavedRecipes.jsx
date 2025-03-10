import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = window.localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:5000/recipe/user-recipes/${userId}`)
      .then(response => {
        setSavedRecipes(response.data);
      })
      .catch(error => console.log(error));
  }, [userId]); // ✅ Added dependency to useEffect

  return (
    <div className='d-flex justify-content-center'>
      <div>
        <h2>Saved Recipes</h2>
        {savedRecipes.map(recipe => (
          <div key={recipe._id} className='mt-4 p-3 border'>
            <Link to={`/read-recipe/${recipe._id}`} className='text-decoration-none'>
              <h3>{recipe.name}</h3>
            </Link>
            <img src={recipe.imageUrl} alt="Recipe" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes;

