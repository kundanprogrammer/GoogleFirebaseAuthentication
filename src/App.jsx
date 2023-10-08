import React, { useState } from 'react'
import { app } from './firebaseConfig'
import { } from "@mui/material"
import Button from '@mui/material/Button'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function App() {

  let auth =getAuth();

const [data, setData] = useState({});
const handleInput = (event)=>{
    let newInput  = {[event.target.name]:event.target.value };
    setData({ ...data, ...newInput});


};
const handleSubmit =()=>{
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((response)=>{
    console.log(response.user);

  })
  .catch((err)=>{
    alert(err.message)
  })
};

  return (
    <>
    <div>
    <input style={{ margin:"12px"}}name="email" placeholder='Email' onChange={(event) => handleInput(event)}/>
    <input name="password" placeholder='Password' onChange={(event) => handleInput(event)}/>
    <br/>
    </div>
    
    <Button style={{margin:"12px"}} variant="contained" size="small" color="error" >
      Submit
    </Button>
  
   
     </>
    
  )
}

export default App