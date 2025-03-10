import axios from 'axios'
import { disabled } from 'express/lib/application'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadRecipe ()  {
    const {id}=useParams()
    const userId=window.localStorage.getItem("id")
    const [recipe,setRecipe]=useState([])
    const [SavedRecipe,setSavedRecipes]=useState([])
    useEffect(() => {
        const getRecipe=() => {
            axios.get('http://localhost:5000/recipe/recipe-by-id/'+id)
            .then(result => {
               setRecipe(result.data)
            }).catch(err=>console.log(err))

        }
        const fetchSavedRecipes =() =>{
            axios.get('http://localhost:5000/recipe/saved-recipes/'+id)
            .then(result => {
               setSavedRecipes(result.data.SavedRecipes)
            }).catch(err=>console.log(err))
        }
        fetchSavedRecipes()
        getRecipe()
    
    },[])

    const SavedRecipes =(recipeId)=>{
        axios.put('https://localhost:5000/recipe',{userId,recipeId})
        .then(result => (
            setSavedRecipes(result.data.savedRecipes)
        )).catch(err => console.log(err))
    }
    const isRecipeSaved=(id) => SavedRecipes.includes(userId)
  return (
    <div className='d-fles justify-content-center container mt-3'>
        <div className='p-2'>
        <img src={recipe.imageUrl} alt=""/>
        </div>
        <div className='p-2'>
      <h2>{recipe.name}</h2>
      <button className='btn btn-warning'
       onclick={ ()=>SavedRecipes(recipe._id)}
        disabled={isRecipeSaved(recipe._id)}
       >
        {isRecipeSaved(recipe._id)?"saved":"save"}
      </button>
      <h3>Description</h3>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      
    </div>
    </div>
  )
}

export default ReadRecipe;


