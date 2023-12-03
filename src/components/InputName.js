import React, { useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { changeName } from '../redux/nameslice';

const InputName = () => {


   const dispatch = useDispatch()

   const  [user, setUser] = useState({
    name: '',
    password: ''
   })

    const handleChange = (e) =>{
        setUser((prev) => ({...prev, [e.target.name]: e.target.value} ))
        dispatch(changeName({user}))
    }

    
  return (
    <div>
    <label>
        name: <input type="text" name='name' value={user.name} onChange={(e) => {handleChange(e)}}/>  
        password: <input type="password" name='password' value={user.password} onChange={(e) => {handleChange(e)}}/> 
         </label>
    </div>
  )
}

export default InputName