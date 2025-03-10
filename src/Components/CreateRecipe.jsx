import axios from 'axios'
import { handle } from 'express/lib/application'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateRecipe = () => {
    const [recipe ,setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        imageUrl:"",
        userId:window.localStorage.getItem("id")

    })
    const handleChange=(event) =>{
        const{name,value}=event.target 
        setRecipe ({...recipe,[name]:value})
    }
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:5000/recipe/create-recipe",recipe)
        .then(result =>{
            navigate('/')
            console.log(result.data)
            alert("recipe created")
        }).catch(er => console.log(er))
    }
  return (
    <div className='d-flex justify-content-center align-item-center vh-100'>
    <div className='p-3 border border-1'>
      <h3>Create Recipe</h3>
      <form onSubmit={handleSubmit}>
          <div className="mt-3">
              <label htmlFor='name'>name  </label>
              <input type="text"  placeholder='Enter Name'   className='form-control'  name="name"
              onchange={handleChange}
              />
          </div>
          <div className="mt-3">
          <label htmlFor='Name'>Description </label>
          <input type="text"  placeholder='Enter Description'    className='form-control' name="name"
           onchange={handleChange}
           />
          </div>

          <div className="mt-3">
          <label htmlFor='ingr'> </label>
          <input type="text"  placeholder='Enter Ingredients'    className='form-control' 
          name ="Ingredients"
          onchange={handleChange}/>
          </div>

          <div className="mt-3">
          <label htmlFor='imageurl'>Image URL </label>
          <input type="text"  placeholder='Enter URL'    className='form-control'   name='imageurl' 
           onchange={handleChange}/>
          </div>

          <button className='mt-1 btn btn-success w-100'>
            Submit</button>
        
          
          
          
           

      </form> 

    </div>
  </div>
  )
}

export default CreateRecipe
