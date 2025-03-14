import { useState } from 'react';
import './App.css';
import Registration from './Components/Registration';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home';
import Nav from './Components/Nav';
import CreateRecipe from './Components/CreateRecipe';
import SavedRecipes from './Components/SavedRecipes';
import ReadRecipe from './Components/ReadRecipe';


function App() {
  return (
   <BrowserRouter> 
   <Nav/>
   <Routes>
   <Route path='' element={<Home/>}></Route>
    <Route path='/auth/register' element={<Registration/>}></Route>
    <Route path='/auth/login' element={<Login/>}></Route>
    <Route path='/recipe/create-recipe' element={<CreateRecipe/>}></Route>
    <Route path='/recipe/saved-recipe' element={<SavedRecipes/>}></Route>
    <Route path='/read-recipe/:id' element={<ReadRecipe/>}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
