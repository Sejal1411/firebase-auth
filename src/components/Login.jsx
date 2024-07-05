import {  Button, TextField } from '@mui/material'
import logo from "/public/side-img.jpg";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      
  <div className='log-in'>
    <div className='image-con'>
      <img src={logo} alt="LOGO" />
    </div>

    <div className='log-in-box'>
    <p> User Login </p>

    <TextField 
     id="outlined-basic"
     color="success" 
     label='Email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     fullWidth
    />
    
    <TextField
     id="outlined-basic"
     color="success" 
     type="password"
     autoComplete="current-password"
     label='Enter Password'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     fullWidth
    />
    
     <Button 
     variant="contained" 
     fullWidth
     onClick={handleSubmit}
     > 
     Login
     </Button>
     <p className='text'>Not Registered? Create an account</p>

    </div>
  </div>
  )
}

export default Login
