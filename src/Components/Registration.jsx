import React,{usestate} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
const Registration = () => {
    const [username,setUsername]=usestate('')
    const [password,setPassword]=usestate('')
    const navigate=useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/auth/register',{username,password})
        .then(result => {
            navigate('/auth/login')
            console.log(result)
           
    }).catch(er => console.log(er))
    }

  return (
    <div className='d-flex justify-content-center align-item-center vh-100'>
      <div className='p-3 border border-1'>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username  </label>
                <input type="text"  placeholder='Enter Username'   className='form-control' 
                onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div>
            <label htmlFor='username'>Username  </label>
            <input type="password"  placeholder='Enter Password'    className='form-control'
            onChange={(e)=> setPassword(e.target.value)} />
            </div>

            <button className='mt-1 btn btn-success w-100'>Submit</button>
            <span>Have an Account?</span>
            
            <link t0='/auth/login'><button className='btn btn-default w-100 mt-2 border'>
              login</button></link>
             

        </form> 

      </div>
    </div>
  )
}

export default Registration;
